const projects = [
  {
    title: "GenCeption: Annotation-Free MLLM Benchmarking",
    image: "images/genception.png",
    description: "As co-first-authors, Lele Cao and me proposed a resource efficient, annotation-free evaluation method for Multimodal Large Language Models (MLLMs). We published a concept conference paper at the NAACL TrustNLP workshop and a validation paper at the Computer Speech & Language Journal.",
    links: [
        {
        title: "TrustNLP Paper",
        url: "https://aclanthology.org/2024.trustnlp-1.16/"
        },
        {
        title: "CSL Paper",
        url: "https://arxiv.org/pdf/2402.14973"
        },
        {
        title: "Code",
        url: "https://github.com/llcresearch/GenCeption"
        },
        {
        title: "Leaderboard",
        url: "https://huggingface.co/spaces/valbuc/GenCeption"
        }
    ]
  },
  {
    title: "Prelovio: A software solution for second-hand store management",
    image: "images/prelovio.png",
    description: "A startup idea for a SaaS solution that allows second-hand stores to upload their inventory to all second hand marketplaces at once by only taking three pictures. Prelovio automatically creates professional looking images and an online ad ready to be published. Connected with online marketplaces, it handles purchases and requests in a single place.",
    links: [
        {
        title: "Prototype",
        url: "https://prelovium-847555285391.europe-west1.run.app/"
        },
        {
        title: "Github",
        url: "https://github.com/valbuc/prelovio"
        }
    ]
  },
  {
    title: "Enhancing Knowledge Graphs with LLMs - A Joint Project with Nobel Prize Outreach",
    image: "images/npo.webp",
    description: "In my MLE role at EQT Motherbrain, I had the opportunity to collaborate with Nobel Prize Outreach on enhanzing a Knowledge Graph of Nobel Prize Laureates with their respective fields of impact, mined from their biographies and Nobel Lectures.",
    links: [
        {
        title: "Blog Post",
        url: "https://medium.com/@valentin.buchner"
        },
    ]
  },
  {
    title: "[RE] Fairness Guarantees under Demographic Shift",
    image: "images/fairness_thumb.png",
    description: "Investigating how fairness constraints of classification algorithms can be guaranteed even when population demographics change in the deployment distribution. Published in Rescience C, presented at NeurIPS 2023 Journal Track, and honored with a Kaggle award of $10.000 in GCP credits.",
    links: [
      {
        title: "Paper",
        url: "https://openreview.net/forum?id=xEfg6h1GFmW"
      },
      {
        title: "Code",
        url: "https://github.com/YasBenAll/fact-ai-project"
      },
      {
        title: "Kaggle Notebook",
        url: "https://www.kaggle.com/code/yassinius/fairness-guarantees-under-demographic-shift"
      },
      {
        title: "NeurIPS Poster",
        url: "https://neurips.cc/virtual/2023/poster/74170"
      }
    ]
  },
  {
    title: "Prompt Tuned Embedding Classification for Multi-Label Industry Sector Allocation",
    image: "images/ptec.png",
    description: "My Master's Thesis, investigating how Parameter Efficient Fine Tuning (PEFT) of Large Language Models can be used to solve multi-label text classification problems. Published in NAACL Industry Track",
    links: [
      {
        title: "NAACL Paper",
        url: "https://aclanthology.org/2024.naacl-industry.10/"
      },
      {
        title: "Blog Post",
        url: "https://medium.com/@valentin.buchner"
      },
      {
        title: "Code",
        url: "https://github.com/EQTPartners/PTEC"
      }
    ]
  },
  {
    title: "Glaucoma Detection using Vision Transformers on Fundus Images",
    image: "images/375px-Fundus_photograph_of_normal_right_eye.jpg",
    description: "A solution approach to the AIROGS Lite challenge. Our architecture uses YOLOv5 to detect the optic disk, which is the most relevant region of interest (ROI) in diagnosing glaucoma. This ROI, plus a margin, is then classified by a fine-tuned vision transformer to detect glaucoma.",
    links: [
      {
        title: "Report",
        url: "https://github.com/valbuc/AIROGSLite-ViT/blob/main/GlaucomaDetectViT.pdf"
      },
      {
        title: "Code",
        url: "https://github.com/valbuc/AIROGSLite-ViT"
      }
    ]
  },
  {
    title: "Linguistic Analysis of Online Domestic Violence Testimonies in the Context of COVID-19",
    image: "images/domestic.webp",
    description: "My Bachelor's Thesis, investigating how the COVID-19 pandemic impacted the mental health of victims of domestic violence by analyzing the language used in Reddit posts. Peer-reviewed and published in SAGE Open.",
    links: [
      {
        title: "Paper",
        url: "https://journals.sagepub.com/doi/10.1177/21582440221146135"
      },
      {
        title: "OSF Project",
        url: "https://osf.io/ckyus/"
      }
    ]
  },
]; 