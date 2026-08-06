import os
try:
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors

    pdf_path = os.path.join('public', 'Devansh_Agarwal_Resume.pdf')
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=40,
        rightMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'Title',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        alignment=1,
        textColor=colors.HexColor('#050505')
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor('#1D4ED8')
    )

    heading_style = ParagraphStyle(
        'Heading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F172A'),
        spaceBefore=8,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1E293B')
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        leftIndent=12,
        textColor=colors.HexColor('#1E293B')
    )

    story = []
    
    # Title
    story.append(Paragraph('Devansh Agarwal', title_style))
    story.append(Spacer(1, 4))
    
    # Contact Links
    contact_text = '<font color="#1D4ED8"><u>+91-9109810608</u></font> / <font color="#1D4ED8"><u>devanshaadhya@gmail.com</u></font> / <font color="#1D4ED8"><u>https://www.linkedin.com/in/devansh-code</u></font>'
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 10))

    # PROJECTS
    story.append(Paragraph('<b>PROJECTS</b> <font size=9 color="#475569"><i>2026 – Present</i></font>', heading_style))
    story.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#475569'), spaceBefore=1, spaceAfter=5))

    projects = [
        '<b>BudgetBuddy</b> – AI-powered personal finance web application that helps users track income, expenses, budgets, and spending patterns with real-time insights and interactive dashboards. (<font color="#1D4ED8"><u>https://budget-buddy-two-zeta.vercel.app/</u></font>)',
        '<b>JobTrackr</b> – Job application management platform that enables users to organize applications, monitor interview progress, and track hiring status from Applied to Selected. (<font color="#1D4ED8"><u>https://jobtrackr-vert.vercel.app</u></font>)',
        '<b>Pigeon</b> – Real-time messaging application supporting one-to-one chat, media sharing, Google authentication, message reply/edit/delete, and live online & last-seen status using Socket.IO. (<font color="#1D4ED8"><u>https://pigeon-beta.vercel.app/</u></font>)',
        '<b>Tech Forge</b> – Developer productivity platform offering AI-powered coding tools, team collaboration, and workflow automation through a modern web interface. (<font color="#1D4ED8"><u>https://tech-forge-zeta.vercel.app</u></font>)',
        '<b>SmartCampus (Working)</b> – Campus management system that digitizes student, faculty, and administrative services, including attendance, academic records, and role-based dashboards.'
    ]
    for p in projects:
        story.append(Paragraph(f'• {p}', bullet_style))
        story.append(Spacer(1, 3.5))

    # EXPERIENCE
    story.append(Spacer(1, 4))
    story.append(Paragraph('<b>EXPERIENCE</b>', heading_style))
    story.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#475569'), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph('<b>Full Stack Developer Intern at Numeric Infosystem Pvt. Ltd.</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Jun 2026 – Jul 2026</i>', body_style))
    story.append(Paragraph('Completed a Full Stack Development internship focused on React.js and Node.js, gaining exposure to modern web development practices and collaborative software development.', body_style))

    # EDUCATION
    story.append(Spacer(1, 4))
    story.append(Paragraph('<b>EDUCATION</b>', heading_style))
    story.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#475569'), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph('<b>GLA University</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Mathura, Uttar Pradesh</b><br/><i>B.Tech. in Computer Science and Engineering</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>July 2024 – July 2028</i>', body_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph('<b>Kanha Makhan Public School</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Mathura, Uttar Pradesh</b><br/>• <i>12<sup>th</sup> Standard (77.6%)</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Mar 2024</i><br/>• <i>10<sup>th</sup> Standard (89.7%)</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Mar 2022</i>', body_style))

    # TECHNICAL SKILLS
    story.append(Spacer(1, 4))
    story.append(Paragraph('<b>TECHNICAL SKILLS</b>', heading_style))
    story.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#475569'), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph('• <b>Programming Languages:</b> Java, JavaScript', bullet_style))
    story.append(Paragraph('• <b>Web Technologies:</b> HTML, CSS, React.js, Node.js', bullet_style))
    story.append(Paragraph('• <b>Database & Backend:</b> MongoDB, Express.js', bullet_style))
    story.append(Paragraph('• <b>Tools & Platforms:</b> Git, VS Code, GitHub', bullet_style))
    story.append(Paragraph('• <b>Core Concepts:</b> Data Structures, Problem Solving', bullet_style))
    story.append(Paragraph('• <b>AI & Emerging Skills:</b> Prompt Engineering, AI Integration', bullet_style))

    # ACHIEVEMENTS
    story.append(Spacer(1, 4))
    story.append(Paragraph('<b>ACHIEVEMENTS</b>', heading_style))
    story.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#475569'), spaceBefore=1, spaceAfter=5))
    story.append(Paragraph('• Built multiple full-stack projects focused on solving real-world problems and improving user experience.', bullet_style))
    story.append(Paragraph('• Actively exploring open-source contributions and collaborative development.', bullet_style))
    story.append(Paragraph('• Consistently improving development skills through hands-on projects and practical implementation.', bullet_style))

    doc.build(story)
    print('SUCCESS: Devansh_Agarwal_Resume.pdf generated in /public!')

except Exception as e:
    print('Error generating PDF:', e)
