from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "files" / "Servas_Adolph_CV_2024_Updated_09.pdf"

INK = colors.HexColor("#0d1b2a")
TEAL = colors.HexColor("#1f4f5f")
MUTED = colors.HexColor("#5a5f5b")
LINE = colors.HexColor("#d9d3c5")
WARM = colors.HexColor("#f4f3ee")
SOFT = colors.HexColor("#faf9f5")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=21,
            leading=25,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "subtitle": ParagraphStyle(
            "subtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.1,
            leading=10.5,
            textColor=TEAL,
            alignment=TA_CENTER,
            spaceAfter=10,
        ),
        "section": ParagraphStyle(
            "section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.2,
            leading=13.5,
            textColor=INK,
        ),
        "role": ParagraphStyle(
            "role",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9.3,
            leading=12,
            textColor=INK,
            spaceAfter=1.5,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=12,
            textColor=INK,
            spaceAfter=4,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.35,
            leading=11.3,
            textColor=INK,
            spaceAfter=3,
        ),
        "meta": ParagraphStyle(
            "meta",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.15,
            leading=10.8,
            textColor=MUTED,
            spaceAfter=3,
        ),
        "paper": ParagraphStyle(
            "paper",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.9,
            textColor=INK,
            spaceAfter=5,
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def section(title, st):
    return [
        Spacer(1, 5),
        Table(
            [[p(title.upper(), st["section"])]],
            colWidths=[170 * mm],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), WARM),
                    ("BOX", (0, 0), (-1, -1), 0.35, LINE),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 3),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ]
            ),
        ),
        Spacer(1, 5),
    ]


def bullets(items, st):
    return ListFlowable(
        [ListItem(p(item, st["small"]), leftIndent=8, bulletColor=TEAL) for item in items],
        bulletType="bullet",
        leftIndent=12,
        bulletFontName="Helvetica",
        bulletFontSize=6,
        bulletOffsetY=1,
    )


def dated_entry(date, title, location, details, st):
    rows = [[p(date, st["meta"]), p(title, st["role"]), p(location, st["meta"])]]
    table = Table(
        rows,
        colWidths=[28 * mm, 100 * mm, 39 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        ),
    )
    flow = [table]
    if details:
        flow.append(bullets(details, st))
    flow.append(Spacer(1, 4))
    return KeepTogether(flow)


def simple_rows(rows, st):
    return Table(
        [[p(a, st["role"]), p(b, st["small"])] for a, b in rows],
        colWidths=[48 * mm, 119 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOX", (0, 0), (-1, -1), 0.35, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#ece7dc")),
                ("BACKGROUND", (0, 0), (0, -1), SOFT),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        ),
    )


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 12 * mm, A4[0] - doc.rightMargin, 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.2)
    canvas.drawString(doc.leftMargin, 7.5 * mm, "Servas Adolph Tarimo - Curriculum Vitae")
    canvas.drawRightString(A4[0] - doc.rightMargin, 7.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build():
    st = styles()
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title="Servas Adolph Tarimo - Curriculum Vitae",
        author="Servas Adolph Tarimo",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=footer)])

    story = [
        p("Curriculum Vitae", st["subtitle"]),
        p("Servas Adolph Tarimo", st["name"]),
        p(
            "PhD Researcher | Future Convergence Technology / Big Data Engineering<br/>"
            "Advanced Data Mining Lab (ADM Lab), Soonchunhyang University, South Korea",
            st["subtitle"],
        ),
        p(
            '<link href="mailto:servasadolph@sch.ac.kr">servasadolph@sch.ac.kr</link> | '
            '<link href="mailto:servasadolph@gmail.com">servasadolph@gmail.com</link> | '
            '<link href="https://servasadolph.github.io">servasadolph.github.io</link> | '
            '<link href="https://scholar.google.com/citations?user=LCd83TUAAAAJ">Google Scholar</link> | '
            '<link href="https://orcid.org/0009-0008-8415-2787">ORCID</link> | '
            '<link href="https://linkedin.com/in/servas-adolph-tarimo-66494066">LinkedIn</link>',
            st["contact"],
        ),
    ]

    story += section("Personal Information", st)
    story.append(
        simple_rows(
            [
                ("Nationality", "Tanzanian"),
                ("Languages", "Swahili (Native), English (Professional working proficiency)"),
                ("Research base", "Soonchunhyang University, Asan, South Korea"),
            ],
            st,
        )
    )

    story += section("Professional Summary", st)
    story.append(
        p(
            "Servas Adolph Tarimo is a PhD researcher in Future Convergence Technology / Big Data Engineering "
            "at Soonchunhyang University, South Korea. His work focuses on AI for healthcare, especially medical "
            "image analysis, domain adaptation, multimodal clinical report generation, and practical LLM/RAG systems. "
            "He develops AI models that remain reliable across hospitals, imaging devices, clinical environments, "
            "and patient populations where data distributions differ. His long-term goal is to build practical, "
            "trustworthy AI health systems for real-world settings, including Tanzania and other low-resource contexts.",
            st["body"],
        )
    )

    story += section("Skills", st)
    story.append(
        simple_rows(
            [
                ("Programming", "Python, Java, C++, JavaScript, React PWA, FastAPI"),
                ("Machine Learning & AI", "PyTorch, TensorFlow, Keras, Scikit-Learn, YOLO, Vision Transformers, GANs"),
                ("LLM / AI Systems", "Retrieval-Augmented Generation (RAG), LangChain/LangGraph-style workflows, NLP, clinical decision-support systems"),
                ("Data Analysis", "Healthcare data analytics, statistical modeling, multimodal data analysis, hybrid search, EHR data analysis"),
                ("Tools", "Jupyter Notebook, VS Code, Git, GitHub, OpenCV, Supabase/PostgreSQL"),
                ("Healthcare AI", "White blood cell classification, medical image segmentation, domain adaptation, clinical report generation"),
            ],
            st,
        )
    )

    story.append(PageBreak())
    story += section("Education", st)
    story.extend(
        [
            dated_entry(
                "2023.09 - Present",
                "Soonchunhyang University<br/>Ph.D. Student, Future Convergence Technology / Big Data Engineering<br/>Advisor: Prof. Woo Ji-Young<br/>Lab: Advanced Data Mining Lab (ADM Lab)",
                "Asan, South Korea",
                [],
                st,
            ),
            dated_entry(
                "2021.09 - 2023.08",
                "Soonchunhyang University<br/>M.Sc. in Big Data Engineering<br/>Advisor: Prof. Woo Ji-Young<br/>Lab: Advanced Data Mining Lab (ADM Lab)",
                "Asan, South Korea",
                [
                    'Dissertation: WBC YOLO-ViT: 2-Way 2-Stage White Blood Cell Detection and Classification with a Combination of YOLOv5 and Vision Transformer. <link href="https://doi.org/10.1016/j.compbiomed.2023.107875">Paper</link> | <link href="https://servasadolph.github.io/files/Servas_Adolph_Tarimo_Thesis_2023.pdf">Thesis PDF</link>.',
                ],
                st,
            ),
            dated_entry(
                "2017.01 - 2020.08",
                "The United African University of Tanzania (UAUT)<br/>B.Sc. in Computer Engineering and Information Technology",
                "Dar es Salaam, Tanzania",
                [],
                st,
            ),
            dated_entry(
                "2012.01 - 2014.01",
                "University of Dar es Salaam Computing Centre (UCC)<br/>Diploma in Computing and Information Technology",
                "Dar es Salaam, Tanzania",
                [],
                st,
            ),
            dated_entry(
                "2011.01 - 2012.02",
                "University of Dar es Salaam Computing Centre (UCC)<br/>Certificate in Computing and Information Technology",
                "Dar es Salaam, Tanzania",
                [],
                st,
            ),
            dated_entry(
                "2007.01 - 2010.11",
                "Mbalizi Secondary School<br/>Certificate of Secondary School",
                "Mbeya, Tanzania",
                [],
                st,
            ),
        ]
    )

    story.append(PageBreak())
    story += section("Research Experience", st)
    story.extend(
        [
            dated_entry(
                "2023 - Present",
                "Soonchunhyang University<br/>Department of Future Convergence Technology / Big Data Engineering<br/>Advisor: Prof. Woo Ji-Young",
                "Asan, South Korea",
                [
                    "Domain Adaptation in Medical AI - developing transfer learning and domain adaptation methods for generalizing medical imaging and healthcare models across clinical sites, imaging protocols, and patient populations.",
                    "Multimodal Report Generation for Blood Smear Analysis - building AI systems that read microscopy images from blood smear tests and generate structured clinical reports by combining image data, attention mechanisms, and language models.",
                    "Medical Report Generation & RAG for Clinical Decision Support - building LLM-based systems that produce structured clinical reports and physician-style patient summaries grounded in verified medical literature via Retrieval-Augmented Generation.",
                ],
                st,
            ),
            dated_entry(
                "2021 - 2024",
                "Soonchunhyang University<br/>Department of Future Convergence Technology / Big Data Engineering<br/>Advisor: Prof. Woo Ji-Young",
                "Asan, South Korea",
                [
                    "Blood Cell Classification & Domain Adaptation - developed methods for classifying white blood cells and other blood cells across hospitals with different equipment, staining conditions, and image distributions.",
                    "Weight Module for cross-hospital adaptation - designed model-weighting strategies to reduce misleading feature learning when source and target hospital domains do not fully match.",
                    "Reinforcement learning-based style transfer - investigated approaches for bridging visual differences between hospitals and improving robustness in blood-cell image analysis.",
                    "Generative Adversarial Networks for Medical Data - developed GAN-based methods for generating realistic blood-cell images to augment limited medical datasets and support model training.",
                ],
                st,
            ),
        ]
    )

    story += section("Research Interest", st)
    story.append(
        bullets(
            [
                "<b>Domain Adaptation in Medical AI:</b> developing AI models that keep working when transferred across hospitals, imaging devices, clinical protocols, and patient populations.",
                "<b>Blood Cell Image Analysis:</b> automated detection, counting, classification, and report generation for blood-smear microscopy and hematological diagnostics.",
                "<b>Multimodal Clinical AI:</b> combining medical images, clinical notes, and structured patient data to support richer clinical understanding.",
                "<b>LLM and RAG Systems:</b> retrieval-grounded AI applications for clinical decision support and practical user-facing guidance systems.",
                "<b>AI for Low-Resource Settings:</b> building practical AI tools for healthcare and education contexts where access to specialists or expert guidance is limited.",
            ],
            st,
        )
    )

    story += section("Work Experience", st)
    story.append(
        dated_entry(
            "2021.09 - Present",
            "Research Assistant<br/>Advanced Data Mining Lab (ADM Lab), Soonchunhyang University",
            "Asan, South Korea",
            [
                "Developing medical AI systems for blood-cell image analysis, domain adaptation across clinical sites, multimodal report generation, and RAG-based clinical decision-support workflows with Prof. Woo Ji-Young.",
            ],
            st,
        )
    )

    story.append(PageBreak())
    story += section("Participating Projects", st)
    story.append(
        simple_rows(
            [
                ("2026 - Present", "Domain Adaptation in Medical AI - robust healthcare models across hospitals, imaging devices, and patient populations."),
                ("2026 - Present", "Multimodal Report Generation for Blood Smear Analysis - microscopy-to-report generation for clinical workflows."),
                ("2026, Completed", "Matokeo Yangu - bilingual platform for Tanzanian students to check exam results and receive AI-guided university and career advice."),
                ("2021.09 - 2024, Completed", "WBC Detection & Classification - automated white blood cell detection, counting, and classification with YOLO and Vision Transformers."),
                ("2021 - 2024, Completed", "Generative models for blood-cell image augmentation and class-imbalance mitigation."),
            ],
            st,
        )
    )

    story += section("International Journal Articles [*: Co-First or Corresponding Author]", st)
    journal_papers = [
        "Yunjung Hong, Servas Adolph Tarimo, and Jiyoung Woo, \"Pancreas Segmentation Using a Two-Stage Pipeline of Faster R-CNN and TransUNet,\" <i>Applied Sciences</i>, vol. 16, no. 12, article 5764, 2026. doi:10.3390/app16125764.",
        "S.A. Tarimo, Mi-Ae Jang, Emmanuel Edward Ngasa, Hee Bong Shin, HyoJin Shin, and Jiyoung Woo, \"WBC YOLO-ViT: 2-Way 2-Stage White Blood Cell Detection and Classification with a Combination of YOLOv5 and Vision Transformer,\" <i>Computers in Biology and Medicine</i>, vol. 169, article 107875, 2024. doi:10.1016/j.compbiomed.2023.107875.",
        "Emmanuel Edward Ngasa, Mi-Ae Jang, S.A. Tarimo, Jiyoung Woo, and Hee Bong Shin, \"Diffusion-based Wasserstein Generative Adversarial Network for Blood Cell Image Augmentation,\" <i>Engineering Applications of Artificial Intelligence</i>, vol. 133, article 108221, 2024. doi:10.1016/j.engappai.2024.108221.",
    ]
    for i, paper in enumerate(journal_papers, 1):
        story.append(p(f"{i}. {paper}", st["paper"]))

    story += section("International Conference", st)
    conference_papers = [
        "S.A. Tarimo, \"Adapting YOLO-ViT for Differential Diagnosis of Myelodysplastic Syndromes and Normal Blood Cell,\" <i>Proceedings of the Korea Society of Computer and Information Conference</i>, 2024.",
        "S.A. Tarimo and J. Woo, \"White Blood Cell Detection and Classification using YOLOv5 with Hybrid ResNet50-VGG16-SVM,\" in <i>Proceedings of the 6th International Conference on ICT for Smart Health & Home (ICT4sHealth & Home)</i>, Kota Kinabalu, Malaysia, December 18-22, 2022. Presentation: December 19, 2022.",
    ]
    for i, paper in enumerate(conference_papers, 1):
        story.append(p(f"{i}. {paper}", st["paper"]))

    story += section("Patents", st)
    story.append(p("1. None. Open to future innovations and patent opportunities related to AI, healthcare, clinical decision support, and medical image analysis.", st["body"]))

    story += section("Awards and Honors", st)
    story.append(
        bullets(
            [
                "2010 Excellence Award - Certificate of Computer Maintenance and Repair, Microsoft Office 2003 and 2007.",
                "2010 Excellence Award - Certificate of Network Setup, Internet Repair, Email Usage, and Web Design.",
                "2012 Excellence Award - Certificate of IT Essentials: PC Hardware and Software, Cisco Networking Academy.",
                "2014 Excellence Award - Certificate of IT Essentials: PC Hardware and Software, Cisco Networking Academy.",
                "2019 Excellence Award - Certificate Software Developer Program and Adobe Photoshop Design.",
                "2019 Excellence Award - Certificate of Korea Culture Exchange Program (PASS Program).",
            ],
            st,
        )
    )

    story += section("Referee", st)
    story.append(
        p(
            "Prof. Woo Ji-Young, Ph.D.<br/>"
            "Department of AI and Big Data Engineering, Soonchunhyang University<br/>"
            "Asan, South Korea<br/>"
            '<link href="mailto:jywoo@sch.ac.kr">jywoo@sch.ac.kr</link>',
            st["body"],
        )
    )
    story.append(Spacer(1, 4))
    story.append(p("Last updated: August 2026", st["meta"]))

    doc.build(story)


if __name__ == "__main__":
    build()
