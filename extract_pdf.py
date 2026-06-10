"""Extract PDF content and find all download links in HTML"""
import fitz
import re

# 1. Extract catalog PDF content
pdf_path = r"E:\CAB3060\02-工作\设计中\dd-deep-design\assets\specs\outdoor-kitchen-catalog.pdf"
doc = fitz.open(pdf_path)
page = doc[0]
text = page.get_text()
print("=== PDF Full Text (last 1000 chars) ===")
print(text[-1000:])
print(f"\nTotal chars: {len(text)}")
doc.close()

# 2. Find download links in HTML
with open(r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Find each download link line
for m in re.finditer(r'<a[^>]*href="[^"]*\.pdf"[^>]*>.*?</a>', html, re.IGNORECASE):
    idx = html.find(m.group(0))
    before = html[max(0,idx-60):idx]
    print(f"\nDownload link found:")
    print(f"  Before: ...{before.strip()[-40:]}...")
    print(f"  Link: {m.group(0)[:100]}")
