import re

with open(r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Find all hot-grid div tags
for i, line in enumerate(lines):
    for t in ["set-eu-8pcs", "set-eu-black", "set-us-3pcs", "set-eu-3pcs"]:
        if f'id="{t}"' in line:
            print(f"{t} at line {i+1}: {line.rstrip()[:80]}")

print("\n===")
# Also show end of set-us-mk (first grid)
for i, line in enumerate(lines):
    if 'id="set-us-mk"' in line:
        print(f"set-us-mk at line {i+1}")
        for j in range(i, i+140):
            if lines[j].strip() == "</div>" and j > i+120:
                print(f"  possible close: line {j+1}: {lines[j].rstrip()}")
        break

# Show lines around 985-1005 (should be around end of eu-3pcs grid)
print("\nLines 990-1010:")
for i in range(989, 1009):
    if i < len(lines):
        print(f"  {i+1}: {lines[i].rstrip()[:100]}")
