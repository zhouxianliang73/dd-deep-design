"""Clean up: remove per-grid remark rows, add combined containers at bottom"""
import re

html_path = r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the remark rows I just added (between </div> of last card and </div> of hot-grid)
# Pattern: a remark-row div followed by </div> of the hot-grid
old_len = len(content)
content = re.sub(
    r'\s+<div class="remark-row">\s+<div class="remark-box">.*?</div>\s+</div>\s+</div>',
    '\n                        </div>',
    content,
    flags=re.DOTALL
)
new_len = len(content)
print(f"Removed remark rows: {old_len - new_len} bytes removed")

# Find the hot-selling section and the section-cta (where we need to insert before)
section_cta = '<div class="section-cta"'
cta_pos = content.find(section_cta)
if cta_pos == -1:
    print("ERROR: Could not find section-cta")
else:
    # Find the closing of the last hot-grid before section-cta
    # The section-cta is right after the last hot-grid's closing </div>
    # We need to insert the combined containers between the last hot-grid's </div> and section-cta
    
    # Find where the last hot-grid ends (the </div> before section-cta)
    # Look backwards from cta_pos
    before_cta = content[:cta_pos]
    # The last hot-grid's closing </div> is at the end of before_cta
    # Find the second-to-last </div> (to account for nesting)
    
    # Let's find the last hot-grid closing by looking at the structure
    # The section-cta starts right after the last hot-grid's </div> line
    
    # Let me find all positions of </div> before section-cta
    div_positions = [m.start() for m in re.finditer(r'</div>', before_cta)]
    last_div = div_positions[-4] if len(div_positions) >= 4 else div_positions[-1] if div_positions else 0
    # Actually the last hot-grid close is likely the last </div> that closes a hot-grid
    # Let me find the last hot-grid by looking for the last "set-" id before section-cta
    last_grid_match = list(re.finditer(r'<div class="hot-grid" id="set-[^"]+">', before_cta))
    if last_grid_match:
        last_grid_start = last_grid_match[-1].start()
        # Find its matching closing </div>
        grid_content = before_cta[last_grid_start:]
        depth = 1
        for i, ch in enumerate(grid_content):
            if ch == '<':
                if grid_content[i:i+5] == '<div ' or grid_content[i:i+4] == '<div>':
                    depth += 1
                elif grid_content[i:i+6] == '</div>':
                    depth -= 1
                    if depth == 0:
                        grid_close_pos = last_grid_start + i
                        break
        print(f"Last hot-grid closes at position {grid_close_pos}")
        
        # Build the combined containers HTML
        combined_html = """
            <!-- Combined Assembly Views (bottom of Hot Sellers) -->
            <div class="combined-section">
                <div class="combined-label"><span data-i18n="hot.combined.title">Assembly &amp; Blueprint</span></div>
                <div class="combined-grid">
                    <!-- US 3-Piece + Fridge -->
                    <div class="combined-card">
                        <div class="combined-panel combined-photo">
                            <div class="combined-panel-label" data-i18n="hot.combined.photo">Product Image</div>
                            <img src="assets/images/products/hot-selling/\u7F8E\u89C4\u4E09\u4EF6\u5957-\u5E26\u51B0\u7BB1.png" alt="US 3-Piece Assembly" loading="lazy">
                        </div>
                        <div class="combined-divider"></div>
                        <div class="combined-panel combined-line">
                            <div class="combined-panel-label" data-i18n="hot.combined.line">Line Drawing</div>
                            <img src="assets/images/products/hot-selling/\u7F8E\u89C4\u4E09\u4EF6\u5957-\u5E26\u51B0\u7BB1lm.png" alt="US 3-Piece Blueprint" loading="lazy">
                        </div>
                    </div>
                    <!-- European 3-Piece + Fridge -->
                    <div class="combined-card">
                        <div class="combined-panel combined-photo">
                            <div class="combined-panel-label" data-i18n="hot.combined.photo">Product Image</div>
                            <img src="assets/images/products/hot-selling/\u6B27\u6D32\u4E09\u4EF6\u5957-\u5E26\u51B0\u7BB1.png" alt="European 3-Piece Assembly" loading="lazy">
                        </div>
                        <div class="combined-divider"></div>
                        <div class="combined-panel combined-line">
                            <div class="combined-panel-label" data-i18n="hot.combined.line">Line Drawing</div>
                            <img src="assets/images/products/hot-selling/\u6B27\u6D32\u4E09\u4EF6\u5957-\u5E26\u51B0\u7BB1lm.png" alt="European 3-Piece Blueprint" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>"""
        
        # Insert after the last hot-grid closes, before the empty line before section-cta
        insert_pos = grid_close_pos + 6  # after </div>
        content = content[:insert_pos] + combined_html + content[insert_pos:]
        
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Combined containers inserted successfully!")
    else:
        print("ERROR: Could not find last hot-grid")

print(f"File size: {len(content)} bytes")
