import axios from "axios";

const personality_data = {
    // Analysts
    "INTJ": {
        "name": "Architect",
        "code": "INTJ",
        "category": "Analysts",
        "image_path": "/images/personalities/intj.png",
        "description": "Imaginative and strategic thinkers, with a plan for everything.",
        "strengths": [
            "Quick, Imaginative and Strategic Mind",
            "High Self-Confidence",
            "Independent and Decisive",
        ],
        "weaknesses": [
            "Arrogant",
            "Judgmental",
            "Overly analytical",
        ],
    },
    "INTP": {
        "name": "Logician",
        "code": "INTP",
        "category": "Analysts",
        "image_path": "/images/personalities/intp.png",
        "description": "Innovative inventors with an unquenchable thirst for knowledge.",
        "strengths": [
            "Great Analysts and Abstract Thinkers",
            "Imaginative and Original",
            "Open-Minded",
        ],
        "weaknesses": [
            "Overly critical",
            "Insensitive",
            "Absent-minded",
        ],
    },

    "ENTJ": {
        "name": "Commander",
        "code": "ENTJ",
        "category": "Analysts",
        "image_path": "/images/personalities/entj.png",
        "description": "Bold, imaginative and strong-willed leaders, always finding a way – or making one.",
        "strengths": [
            "Efficient",
            "Energetic",
            "Self-Confident",
        ],
        "weaknesses": [
            "Stubborn and Dominant",
            "Intolerant",
            "Impatient",
        ],
    },

    "ENTP": {
        "name": "Debater",
        "code": "ENTP",
        "category": "Analysts",
        "image_path": "/images/personalities/entp.png",
        "description": "Smart and curious thinkers who cannot resist an intellectual challenge.",
        "strengths": [
            "Knowledgeable",
            "Quick Thinkers",
            "Original",
        ],
        "weaknesses": [
            "Very Argumentative",
            "Insensitive",
            "Intolerant",
        ],
    },

    // Diplomats
    "INFJ": {
        "name": "Advocate",
        "code": "INFJ",
        "category": "Diplomats",
        "image_path": "/images/personalities/infj.png",
        "description": "Quiet and mystical, yet very inspiring and tireless idealists.",
        "strengths": [
            "Creative",
            "Insightful",
            "Inspiring and Convincing",
        ],
        "weaknesses": [
            "Sensitive",
            "Extremely Private",
            "Perfectionist",
        ],
    },

    "INFP": {
        "name": "Mediator",
        "code": "INFP",
        "category": "Diplomats",
        "image_path": "/images/personalities/infp.png",
        "description": "Poetic, kind and altruistic people, always eager to help a good cause.",
        "strengths": [
            "Idealistic",
            "Seek and Value Harmony",
            "Open-Minded and Flexible",
        ],
        "weaknesses": [
            "Too Idealistic",
            "Too Altruistic",
            "Impractical",
        ],
    },

    "ENFJ": {
        "name": "Protagonist",
        "code": "ENFJ",
        "category": "Diplomats",
        "image_path": "/images/personalities/enfj.png",
        "description": "Charismatic and inspiring leaders, able to mesmerize their listeners.",
        "strengths": [
            "Tolerant",
            "Reliable",
            "Charismatic",
        ],
        "weaknesses": [
            "Overly Idealistic",
            "Too Selfless",
            "Too Sensitive",
        ],
    },

    "ENFP": {
        "name": "Campaigner",
        "code": "ENFP",
        "category": "Diplomats",
        "image_path": "/images/personalities/enfp.png",
        "description": "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
        "strengths": [
            "Curious",
            "Observant",
            "Energetic and Enthusiastic",
        ],
        "weaknesses": [
            "Poor Practical Skills",
            "Find it Difficult to Focus",
            "Overthink Things",
        ],
    },

    // Sentinels
    "ISTJ": {
        "name": "Logistician",
        "code": "ISTJ",
        "category": "Sentinels",
        "image_path": "/images/personalities/istj.png",
        "description": "Practical and fact-minded individuals, whose reliability cannot be doubted.",
        "strengths": [
            "Honest and Direct",
            "Strong-willed and Dutiful",
            "Very Responsible",
        ],
        "weaknesses": [
            "Stubborn",
            "Insensitive",
            "Always by the Book",
        ],
    },

    "ISFJ": {
        "name": "Defender",
        "code": "ISFJ",
        "category": "Sentinels",
        "image_path": "/images/personalities/isfj.png",
        "description": "Very dedicated and warm protectors, always ready to defend their loved ones.",
        "strengths": [
            "Supportive",
            "Reliable and Patient",
            "Imaginative and Observant",
        ],
        "weaknesses": [
            "Humble and Shy",
            "Take Things Too Personally",
            "Repress Their Feelings",
        ],
    },

    "ESTJ": {
        "name": "Executive",
        "code": "ESTJ",
        "category": "Sentinels",
        "image_path": "/images/personalities/estj.png",
        "description": "Excellent administrators, unsurpassed at managing things – or people.",
        "strengths": [
            "Dedicated",
            "Strong-willed",
            "Direct and Honest",
        ],
        "weaknesses": [
            "Inflexible and Stubborn",
            "Uncomfortable with Unconventionality",
            "Judgmental",
        ],
    },

    "ESFJ": {
        "name": "Consul",
        "code": "ESFJ",
        "category": "Sentinels",
        "image_path": "/images/personalities/esfj.png",
        "description": "Extraordinarily caring, social and popular people, always eager to help.",
        "strengths": [
            "Strong Practical Skills",
            "Strong Sense of Duty",
            "Very Loyal",
        ],
        "weaknesses": [
            "Worried about Their Social Status",
            "Inflexible",
            "Reluctant to Innovate or Improvise",
        ],
    },

    // Explorers
    "ISTP": {
        "name": "Virtuoso",
        "code": "ISTP",
        "category": "Explorers",
        "image_path": "/images/personalities/istp.png",
        "description": "Bold and practical experimenters, masters of all kinds of tools.",
        "strengths": [
            "Bold",
            "Practical",
            "Original",
        ],
        "weaknesses": [
            "Stubborn",
            "Insensitive",
            "Always by the Book",
        ],
    },

    "ISFP": {
        "name": "Adventurer",
        "code": "ISFP",
        "category": "Explorers",
        "image_path": "/images/personalities/isfp.png",
        "description": "Flexible and charming artists, always ready to explore and experience something new.",
        "strengths": [
            "Charming",
            "Sensitive to Others",
            "Imaginative",
        ],
        "weaknesses": [
            "Fiercely Independent",
            "Unpredictable",
            "Easily Stressed",
        ],
    },

    "ESTP": {
        "name": "Entrepreneur",
        "code": "ESTP",
        "category": "Explorers",
        "image_path": "/images/personalities/estp.png",
        "description": "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
        "strengths": [
            "Bold",
            "Original",
            "Perceptive",
        ],
        "weaknesses": [
            "Insensitive",
            "Risk-prone",
            "Unstructured",
        ],
    },

    "ESFP": {
        "name": "Entertainer",
        "code": "ESFP",
        "category": "Explorers",
        "image_path": "/images/personalities/esfp.png",
        "description": "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
        "strengths": [
            "Bold",
            "Original",
            "Perceptive",
        ],
        "weaknesses": [
            "Insensitive",
            "Risk-prone",
            "Unstructured",
        ],
    },
}

export const getPersonalityData = (code) => {
    return personality_data[code];
}

export const getData = async (question_count) => {
    try {
        const api_url = "http://api:8000";
        const response = await axios.get(`${api_url}/api/quiz?question_count=${question_count}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const submitData = async (answers) => {
    try {
        const api_url = "http://api:8000";
        const response = await axios.post(`${api_url}/api/predict`, answers);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}