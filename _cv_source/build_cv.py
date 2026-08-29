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
    PageTemplate,
    PageBreak,
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
TAUPE = colors.HexColor("#b1ada1")


def make_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "tagline": ParagraphStyle(
            "tagline",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "contact": ParagraphStyle(
            "contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=TEAL,
            alignment=TA_CENTER,
            spaceAfter=12,
        ),
        "section": ParagraphStyle(
            "section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=INK,
            spaceBefore=9,
            spaceAfter=5,
            borderPadding=(0, 0, 3, 0),
            borderColor=LINE,
            borderWidth=0,
            borderRadius=0,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=13.2,
            textColor=INK,
            spaceAfter=5,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=12,
            textColor=INK,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "role",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9.4,
            leading=12.5,
            textColor=INK,
            spaceAfter=2,
        ),
        "meta": ParagraphStyle(
            "meta",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.5,
            textColor=MUTED,
            spaceAfter=4,
        ),
        "paper": ParagraphStyle(
            "paper",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=11.8,
            textColor=INK,
            spaceAfter=5,
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def bullets(items, styles):
    return ListFlowable(
        [
            ListItem(p(item, styles["small"]), leftIndent=8, bulletColor=TEAL)
            for item in items
        ],
        bulletType="bullet",
        start="circle",
        leftIndent=12,
        bulletFontName="Helvetica",
        bulletFontSize=6,
        bulletOffsetY=1,
    )


def section(title, styles):
    return [
        Spacer(1, 2),
        Table(
            [[p(title.upper(), styles["section"])]],
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
        Spacer(1, 4),
    ]


def dated_entry(title, date, org, details, styles):
    header = Table(
        [[p(title, styles["role"]), p(date, styles["meta"])]],
        colWidths=[122 * mm, 45 * mm],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ]
        ),
    )
    flow = [header, p(org, styles["meta"])]
    if details:
        flow.append(bullets(details, styles))
    flow.append(Spacer(1, 4))
    return KeepTogether(flow)


def build():
    styles = make_styles()
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=17 * mm,
        bottomMargin=16 * mm,
        title="Servas Adolph - Curriculum Vitae",
        author="Servas Adolph Tarimo",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")

    def footer(canvas, doc_obj):
        canvas.saveState()
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.4)
        canvas.line(doc.leftMargin, 12 * mm, A4[0] - doc.rightMargin, 12 * mm)
        canvas.setFillColor(MUTED)
        canvas.setFont("Helvetica", 7.5)
        canvas.drawString(doc.leftMargin, 7.5 * mm, "Servas Adolph Tarimo - Curriculum Vitae")
        canvas.drawRightString(A4[0] - doc.rightMargin, 7.5 * mm, f"Page {doc_obj.page}")
        canvas.restoreState()

    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=footer)])

    story = [
        p("Servas Adolph Tarimo", styles["name"]),
        p(
            "PhD Researcher in Future Convergence Technology / Big Data Engineering<br/>"
            "Soonchunhyang University, South Korea",
            styles["tagline"],
        ),
        p(
            '<link href="mailto:servasadolph@sch.ac.kr">servasadolph@sch.ac.kr</link> | '
            '<link href="mailto:servasadolph@gmail.com">servasadolph@gmail.com</link> | '
            '<link href="https://servasadolph.github.io">servasadolph.github.io</link> | '
            '<link href="https://scholar.google.com/citations?user=LCd83TUAAAAJ">Google Scholar</link> | '
            '<link href="https://orcid.org/0009-0008-8415-2787">ORCID</link> | '
            '<link href="https://linkedin.com/in/servas-adolph-tarimo-66494066">LinkedIn</link>',
            styles["contact"],
        ),
    ]

    story += section("Research Profile", styles)
    story.append(
        p(
            "PhD researcher working at the intersection of medical image analysis, domain adaptation, "
            "multimodal report generation, and applied LLM/RAG systems. My research focuses on building "
            "AI models that remain reliable across hospitals, imaging devices, clinical protocols, and "
            "patient populations, with long-term interest in practical healthcare tools for Tanzania and "
            "other low-resource settings.",
            styles["body"],
        )
    )

    story += section("Education", styles)
    story.extend(
        [
            dated_entry(
                "Ph.D. Student, Future Convergence Technology / Big Data Engineering",
                "2023.09 - Present",
                "Soonchunhyang University, South Korea",
                [
                    'Advisor: <link href="https://home.sch.ac.kr/profile/main.jsp?id=8bcb6229bdbd2ebb88f25058db0597e6c86482e6c745cf914a2d3e61be754acb2197c74bb2db433d">Prof. Woo Ji-Young</link>.',
                    "Lab: Advanced Data Mining Lab (ADM Lab).",
                ],
                styles,
            ),
            dated_entry(
                "M.Sc. Big Data Engineering",
                "2021.09 - 2023.08",
                "Soonchunhyang University, South Korea",
                [
                    "Dissertation: WBC YOLO-ViT: 2-Way 2-Stage White Blood Cell Detection and Classification with a Combination of YOLOv5 and Vision Transformer.",
                    '<link href="https://doi.org/10.1016/j.compbiomed.2023.107875">Published paper</link> | <link href="https://servasadolph.github.io/files/Servas_Adolph_Tarimo_Thesis_2023.pdf">Thesis PDF</link>.',
                    "Advisor: Prof. Woo Ji-Young.",
                    "Lab: Advanced Data Mining Lab (ADM Lab).",
                ],
                styles,
            ),
            dated_entry(
                "B.Sc. Computer Engineering & Information Technology",
                "2017.01 - 2020.08",
                "United African University of Tanzania",
                [],
                styles,
            ),
        ]
    )

    story += section("Research Experience", styles)
    story.extend(
        [
            dated_entry(
                "Advanced Data Mining Lab, Soonchunhyang University",
                "2023 - Present",
                "Advisor: Prof. Woo Ji-Young",
                [
                    "Domain Adaptation in Medical AI - developing transfer learning and domain adaptation methods for generalizing medical imaging and healthcare models across clinical sites, imaging protocols, and patient populations.",
                    "Medical Report Generation & RAG for Clinical Decision Support - building LLM-based systems that produce structured clinical reports and physician-style patient summaries grounded in verified medical literature via Retrieval-Augmented Generation.",
                    "Current directions include domain-robust medical models, multimodal report generation for blood smear analysis, and practical AI systems that remain trustworthy beyond a single dataset.",
                ],
                styles,
            ),
            dated_entry(
                "Advanced Data Mining Lab, Soonchunhyang University",
                "2021 - 2023",
                "Advisor: Prof. Woo Ji-Young",
                [
                    "White Blood Cell Classification and Segmentation - conducted research on automated blood-cell detection, counting, and classification using YOLO, Vision Transformers, and classical machine-learning pipelines.",
                    "Generative Models for Medical Data - developed data augmentation approaches for limited blood-cell image datasets, including GAN-based image generation for class-imbalance mitigation.",
                ],
                styles,
            ),
        ]
    )

    story.append(PageBreak())
    story += section("Work Experience", styles)
    story.append(
        dated_entry(
            "Research Assistant",
            "2021.09 - Present",
            "Advanced Data Mining Lab (ADM Lab), Soonchunhyang University, South Korea",
            [
                "Developing medical AI systems for blood-cell image analysis, domain adaptation across clinical sites, multimodal report generation, and RAG-based clinical decision-support workflows with Prof. Woo Ji-Young.",
            ],
            styles,
        )
    )

    story += section("Selected Projects", styles)
    project_rows = [
        [
            p("<b>Domain Adaptation in Medical AI</b><br/><font color='#5a5f5b'>2026 - Present</font>", styles["small"]),
            p("Transfer learning and domain adaptation methods for robust medical AI across hospitals, imaging devices, and patient populations.", styles["small"]),
        ],
        [
            p("<b>Multimodal Report Generation for Blood Smear Analysis</b><br/><font color='#5a5f5b'>2026 - Present</font>", styles["small"]),
            p("AI systems that read microscopy blood-smear images and generate structured clinical reports using attention mechanisms and language models.", styles["small"]),
        ],
        [
            p("<b>Matokeo Yangu</b><br/><font color='#5a5f5b'>2026, completed</font>", styles["small"]),
            p("Bilingual platform helping Tanzanian students check exam results and receive AI-guided university and career-pathway advice.", styles["small"]),
        ],
        [
            p("<b>WBC Detection & Classification</b><br/><font color='#5a5f5b'>2021.09 - 2024, completed</font>", styles["small"]),
            p("Automated white blood cell detection, counting, and classification using YOLO and Vision Transformers for resource-constrained clinical laboratories.", styles["small"]),
        ],
    ]
    story.append(
        Table(
            project_rows,
            colWidths=[55 * mm, 112 * mm],
            style=TableStyle(
                [
                    ("BOX", (0, 0), (-1, -1), 0.35, LINE),
                    ("INNERGRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#ece7dc")),
                    ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#faf9f5")),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ]
            ),
        )
    )

    story += section("Publications", styles)
    papers = [
        (
            "Yunjung Hong, Servas Adolph Tarimo, and Jiyoung Woo. "
            "<b>Pancreas Segmentation Using a Two-Stage Pipeline of Faster R-CNN and TransUNet.</b> "
            "<i>Applied Sciences</i>, 16(12):5764, 2026. "
            '<link href="https://doi.org/10.3390/app16125764">doi:10.3390/app16125764</link>.'
        ),
        (
            "Servas Adolph Tarimo, Mi-Ae Jang, Emmanuel Edward Ngasa, Hee Bong Shin, HyoJin Shin, and Jiyoung Woo. "
            "<b>WBC YOLO-ViT: 2-Way 2-Stage White Blood Cell Detection and Classification with a Combination of YOLOv5 and Vision Transformer.</b> "
            "<i>Computers in Biology and Medicine</i>, 169:107875, 2024. "
            '<link href="https://doi.org/10.1016/j.compbiomed.2023.107875">doi:10.1016/j.compbiomed.2023.107875</link>.'
        ),
        (
            "Emmanuel Edward Ngasa, Mi-Ae Jang, Servas Adolph Tarimo, Jiyoung Woo, and Hee Bong Shin. "
            "<b>Diffusion-based Wasserstein Generative Adversarial Network for Blood Cell Image Augmentation.</b> "
            "<i>Engineering Applications of Artificial Intelligence</i>, 133:108221, 2024. "
            '<link href="https://doi.org/10.1016/j.engappai.2024.108221">doi:10.1016/j.engappai.2024.108221</link>.'
        ),
        (
            "Servas Adolph Tarimo. "
            "<b>Adapting YOLO-ViT for Differential Diagnosis of Myelodysplastic Syndromes and Normal Blood Cell.</b> "
            "<i>Proceedings of the Korea Society of Computer and Information Conference</i>, 2024."
        ),
        (
            "Servas Adolph Tarimo and Jiyoung Woo. "
            "<b>White Blood Cell Detection and Classification using YOLOv5 with Hybrid ResNet50-VGG16-SVM.</b> "
            "<i>Proceedings of the 6th International Conference on ICT for Smart Health & Home</i>, Kota Kinabalu, Malaysia, 2022."
        ),
    ]
    for paper in papers:
        story.append(p(paper, styles["paper"]))

    story += section("Technical Competencies", styles)
    story.append(
        bullets(
            [
                "Programming and frameworks: Python, PyTorch, FastAPI, React PWA, OpenCV.",
                "Medical AI: blood-cell image analysis, pancreas segmentation, detection, classification, report generation.",
                "Methods: domain adaptation, transfer learning, YOLO, Vision Transformers, GANs, RAG, LLM-based decision-support workflows.",
                "Data systems: Supabase/PostgreSQL, hybrid search, structured clinical documentation, EHR data analysis.",
            ],
            styles,
        )
    )

    story += section("Research Interests", styles)
    story.append(
        p(
            "Domain adaptation in medical AI; cross-site model generalization; blood-smear image analysis; "
            "multimodal clinical report generation; retrieval-augmented generation for decision support; "
            "practical AI systems for low-resource healthcare and education contexts.",
            styles["body"],
        )
    )

    story += section("Selected Links", styles)
    story.append(
        p(
            '<link href="https://servasadolph.github.io">Portfolio</link> | '
            '<link href="https://github.com/servasadolph">GitHub</link> | '
            '<link href="https://scholar.google.com/citations?user=LCd83TUAAAAJ">Google Scholar</link> | '
            '<link href="https://orcid.org/0009-0008-8415-2787">ORCID</link> | '
            '<link href="https://linkedin.com/in/servas-adolph-tarimo-66494066">LinkedIn</link> | '
            '<link href="https://www.youtube.com/@servasadolph">YouTube</link>',
            styles["body"],
        )
    )
    story.append(Spacer(1, 4))
    story.append(p("Last updated: August 2026", styles["meta"]))

    doc.build(story)


if __name__ == "__main__":
    build()
