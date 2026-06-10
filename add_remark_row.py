"""Insert combined remark row into hot-selling grids"""
import re

html_path = r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the combined images per grid
combined_images = {
    "set-eu-8pcs": {
        "img": "assets/images/products/hot-selling/欧款8件-kd.png",
        "label": "Assembly View"
    },
    "set-us-3pcs": {
        "img": "assets/images/products/hot-selling/美规三件套-带冰箱.png",
        "label": "Assembly View"
    },
    "set-eu-3pcs": {
        "img": "assets/images/products/hot-selling/欧洲三件套-带冰箱.png",
        "label": "Assembly View"
    }
}

# Build remark row HTML template
def make_remark_row(label_cn, label_en, img_path):
    return f"""
                            <div class="remark-row">
                                <div class="remark-box">
                                    <div class="remark-label"><span data-i18n="{label_cn}">{label_en}</span></div>
                                    <div class="remark-img-wrap">
                                        <img src="{img_path}" alt="Combined assembly" loading="lazy">
                                    </div>
                                </div>
                            </div>"""

# Insert before each hot-grid's closing </div>
for grid_id, info in combined_images.items():
    # Find the hot-grid opening tag
    open_tag = f'<div class="hot-grid" id="{grid_id}">'
    open_pos = content.find(open_tag)
    if open_pos == -1:
        print(f"ERROR: Could not find {grid_id}")
        continue
    
    # Find the matching closing </div> by counting depth from the opening tag
    # The grid is at depth 1 (one div tag), find the matching close
    search_start = open_pos + len(open_tag)
    depth = 0
    close_pos = -1
    
    for i in range(search_start, len(content)):
        # Simple tag counting - won't handle nested attributes with > but good enough
        if content[i] == '<':
            # Check if it's a closing div
            if content[i:i+6] == '</div>':
                if depth == 0:
                    close_pos = i
                    break
                depth -= 1
            elif content[i:i+5] == '<div ' or content[i:i+4] == '<div>':
                depth += 1
    
    if close_pos == -1:
        print(f"ERROR: Could not find closing tag for {grid_id}")
        continue
    
    # Build the remark HTML
    remark_html = make_remark_row(
        f"hot.remark.{grid_id.replace('set-', '')}",
        info["label"],
        info["img"]
    )
    
    # Insert before the closing tag
    content = content[:close_pos] + remark_html + "\n                        " + content[close_pos:]
    
    print(f"Inserted remark row for {grid_id} at position {close_pos}")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("\nDone! Remark rows added to hot-selling grids.")
