"""Find hot-grid closing positions and add remark rows"""
with open(r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

targets = ["set-eu-8pcs", "set-eu-black", "set-us-3pcs", "set-eu-3pcs"]

for t in targets:
    for i, line in enumerate(lines):
        if f'id="{t}"' in line:
            # Find closing </div> at this level
            depth = 0
            started = False
            for j in range(i, min(i+60, len(lines))):
                opens = lines[j].count("<div ")
                closes = lines[j].count("</div>")
                if not started and opens > 0:
                    started = True
                    depth += opens
                    depth -= closes
                elif started:
                    depth += opens - closes
                    if depth <= 0:
                        print(f"{t}: start={i+1}, close at line {j+1}")
                        # Show lines around close
                        for k in range(max(0,j-3), j+1):
                            print(f"  {k+1}: {lines[k].rstrip()[:80]}")
                        print()
                        break
            break
