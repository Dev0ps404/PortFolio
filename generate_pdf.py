import os

# Pure valid PDF generator script producing clean 1-page PDF
pdf_text_lines = [
    ("Devansh Agarwal", 22, True, 740),
    ("+91-9109810608 | devanshaadhya@gmail.com | linkedin.com/in/devansh-code", 9.5, False, 722),
    
    ("PROJECTS (2026 - Present)", 11, True, 695),
    ("* BudgetBuddy - AI-powered personal finance web app (https://budget-buddy-two-zeta.vercel.app/)", 9, False, 678),
    ("* JobTrackr - Job application management platform (https://jobtrackr-vert.vercel.app)", 9, False, 663),
    ("* Pigeon - Real-time messaging app with Socket.IO (https://pigeon-beta.vercel.app/)", 9, False, 648),
    ("* Tech Forge - Developer productivity platform with AI tools (https://tech-forge-zeta.vercel.app)", 9, False, 633),
    ("* SmartCampus (Working) - Campus management system with attendance & role dashboards", 9, False, 618),
    
    ("EXPERIENCE", 11, True, 590),
    ("Full Stack Developer Intern at Numeric Infosystem Pvt. Ltd. (Jun 2026 - Jul 2026)", 9.5, True, 573),
    ("Completed a Full Stack Development internship focused on React.js and Node.js.", 9, False, 558),
    
    ("EDUCATION", 11, True, 530),
    ("GLA University - B.Tech. in Computer Science and Engineering (July 2024 - July 2028)", 9.5, True, 513),
    ("Kanha Makhan Public School - 12th Standard: 77.6% (2024) | 10th Standard: 89.7% (2022)", 9, False, 498),
    
    ("TECHNICAL SKILLS", 11, True, 470),
    ("* Languages: Java, JavaScript | Web: HTML, CSS, React.js, Node.js", 9, False, 453),
    ("* Database & Backend: MongoDB, Express.js | Tools: Git, VS Code, GitHub", 9, False, 438),
    ("* Core Concepts: Data Structures, Problem Solving | AI: Prompt Engineering, AI Integration", 9, False, 423),
    
    ("ACHIEVEMENTS", 11, True, 395),
    ("* Built multiple full-stack projects focused on solving real-world problems.", 9, False, 378),
    ("* Actively exploring open-source contributions and collaborative development.", 9, False, 363),
    ("* Consistently improving development skills through hands-on practical implementation.", 9, False, 348)
]

stream_cmds = []
for text, size, is_bold, y in pdf_text_lines:
    font = "/F2" if is_bold else "/F1"
    # Escape parentheses in string
    clean_text = text.replace("(", "\\(").replace(")", "\\)")
    stream_cmds.append(f"BT {font} {size} Tf 40 {y} Td ({clean_text}) Tj ET")

stream_content = "\n".join(stream_cmds)
stream_bytes = stream_content.encode('latin1')

pdf_obj = f"""%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kinds /Page /Count 1 /Kids [3 0 R] >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Length {len(stream_bytes)} >>
stream
{stream_content}
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000125 00000 n 
0000000262 00000 n 
0000000341 00000 n 
0000000425 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
{425 + len(stream_bytes) + 50}
%%EOF
"""

os.makedirs('public', exist_ok=True)
with open('public/Devansh_Agarwal_Resume.pdf', 'wb') as f:
    f.write(pdf_obj.encode('latin1'))

print('Successfully generated public/Devansh_Agarwal_Resume.pdf!')
