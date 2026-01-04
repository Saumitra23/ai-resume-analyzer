export const resumes: Resume[] = [
    {
      id: "1",
      companyName: "Google",
      jobTitle: "Frontend Developer",
      imagePath: "/images/resume_01.png",
      resumePath: "/resumes/resume-1.pdf",
      feedback: {
        overallScore: 85,
        ATS: {
          score: 90,
          tips: [],
        },
        toneAndStyle: {
          score: 90,
          tips: [],
        },
        content: {
          score: 90,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "2",
      companyName: "Microsoft",
      jobTitle: "Cloud Engineer",
      imagePath: "/images/resume_02.png",
      resumePath: "/resumes/resume-2.pdf",
      feedback: {
        overallScore: 55,
        ATS: {
          score: 90,
          tips: [],
        },
        toneAndStyle: {
          score: 90,
          tips: [],
        },
        content: {
          score: 90,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "3",
      companyName: "Apple",
      jobTitle: "iOS Developer",
      imagePath: "/images/resume_03.png",
      resumePath: "/resumes/resume-3.pdf",
      feedback: {
        overallScore: 75,
        ATS: {
          score: 90,
          tips: [],
        },
        toneAndStyle: {
          score: 90,
          tips: [],
        },
        content: {
          score: 90,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "4",
      companyName: "Amazon",
      jobTitle: "Software Development Engineer",
      imagePath: "/images/resume_01.png",
      resumePath: "/resumes/resume-4.pdf",
      feedback: {
        overallScore: 92,
        ATS: {
          score: 95,
          tips: [],
        },
        toneAndStyle: {
          score: 88,
          tips: [],
        },
        content: {
          score: 94,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 93,
          tips: [],
        },
      },
    },
    {
      id: "5",
      companyName: "Netflix",
      jobTitle: "Backend Engineer",
      imagePath: "/images/resume_02.png",
      resumePath: "/resumes/resume-5.pdf",
      feedback: {
        overallScore: 68,
        ATS: {
          score: 72,
          tips: [],
        },
        toneAndStyle: {
          score: 65,
          tips: [],
        },
        content: {
          score: 70,
          tips: [],
        },
        structure: {
          score: 68,
          tips: [],
        },
        skills: {
          score: 65,
          tips: [],
        },
      },
    },
    {
      id: "6",
      companyName: "Tesla",
      jobTitle: "Full Stack Developer",
      imagePath: "/images/resume_03.png",
      resumePath: "/resumes/resume-6.pdf",
      feedback: {
        overallScore: 80,
        ATS: {
          score: 85,
          tips: [],
        },
        toneAndStyle: {
          score: 78,
          tips: [],
        },
        content: {
          score: 82,
          tips: [],
        },
        structure: {
          score: 79,
          tips: [],
        },
        skills: {
          score: 76,
          tips: [],
        },
      },
    },
    {
      id: "7",
      companyName: "Meta",
      jobTitle: "React Developer",
      imagePath: "/images/resume_01.png",
      resumePath: "/resumes/resume-7.pdf",
      feedback: {
        overallScore: 88,
        ATS: {
          score: 91,
          tips: [],
        },
        toneAndStyle: {
          score: 86,
          tips: [],
        },
        content: {
          score: 89,
          tips: [],
        },
        structure: {
          score: 87,
          tips: [],
        },
        skills: {
          score: 87,
          tips: [],
        },
      },
    },
    {
      id: "8",
      companyName: "Adobe",
      jobTitle: "UI/UX Designer",
      imagePath: "/images/resume_02.png",
      resumePath: "/resumes/resume-8.pdf",
      feedback: {
        overallScore: 62,
        ATS: {
          score: 58,
          tips: [],
        },
        toneAndStyle: {
          score: 65,
          tips: [],
        },
        content: {
          score: 60,
          tips: [],
        },
        structure: {
          score: 64,
          tips: [],
        },
        skills: {
          score: 63,
          tips: [],
        },
      },
    },
    {
      id: "9",
      companyName: "Salesforce",
      jobTitle: "DevOps Engineer",
      imagePath: "/images/resume_03.png",
      resumePath: "/resumes/resume-9.pdf",
      feedback: {
        overallScore: 78,
        ATS: {
          score: 80,
          tips: [],
        },
        toneAndStyle: {
          score: 75,
          tips: [],
        },
        content: {
          score: 79,
          tips: [],
        },
        structure: {
          score: 77,
          tips: [],
        },
        skills: {
          score: 79,
          tips: [],
        },
      },
    },
    {
      id: "10",
      companyName: "Uber",
      jobTitle: "Data Scientist",
      imagePath: "/images/resume_01.png",
      resumePath: "/resumes/resume-10.pdf",
      feedback: {
        overallScore: 95,
        ATS: {
          score: 97,
          tips: [],
        },
        toneAndStyle: {
          score: 93,
          tips: [],
        },
        content: {
          score: 96,
          tips: [],
        },
        structure: {
          score: 94,
          tips: [],
        },
        skills: {
          score: 95,
          tips: [],
        },
      },
    },
  ];
  
  export const AIResponseFormat = `
        interface Feedback {
        overallScore: number; //max 100
        ATS: {
          score: number; //rate based on ATS suitability
          tips: {
            type: "good" | "improve";
            tip: string; //give 3-4 tips
          }[];
        };
        toneAndStyle: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        content: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        structure: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        skills: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
      }`;
  
  export const prepareInstructions = ({
    jobTitle,
    jobDescription,
    AIResponseFormat,
  }: {
    jobTitle: string;
    jobDescription: string;
    AIResponseFormat: string;
  }) =>
    `You are an expert in ATS (Applicant Tracking System) and resume analysis.
    Please analyze and rate this resume and suggest how to improve it.
    The rating can be low if the resume is bad.
    Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
    If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
    If available, use the job description for the job user is applying to to give more detailed feedback.
    If provided, take the job description into consideration.
    The job title is: ${jobTitle}
    The job description is: ${jobDescription}
    Provide the feedback using the following format: ${AIResponseFormat}
    Return the analysis as a JSON object, without any other text and without the backticks.
    Do not include any other text or comments.`;