"""Find all PDF/download links in the website"""
import re

with open(r"E:\CAB3060\02-工作\设计中\dd-deep-design\index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find all href with .pdf
pdfs = re.findall(r'href="([^"]*\.pdf)"', content, re.IGNORECASE)
print("=== PDF download links ===")
for p in pdfs:
    # Find surrounding text for context
    idx = content.find(p)
    context = content[max(0,idx-80):idx+len(p)+40].replace('\n',' ')
    print(f"\n  {p}")
    print(f"  Context: ...{context}...")

# Also find any download references
dls = re.findall(r'href="([^"]*)"[^>]*download', content, re.IGNORECASE)
if dls:
    print(f"\n=== Other download links ===")
    for d in dls:
        print(f"  {d}")
