export {}

declare global {
  interface Experience {
    cover: string,
    remote: boolean,
    jobTitle: string,
    company: string,
    startDate: Date,
    endDate: Date,
    jobDescription: string
  }
  
  interface Footer {
    createdAt: Date,
    developedBy: string,
    copyRights: string,
  }
  
  interface Header {
    imageUrl: string,
    imageAlt: string,
    name: string,
    title: string
  }
  
  interface Formation {
    degree: string,
    institution: string,
    graduatedAt: Date,
    graduatedAtVerbiage: string,
  }
  
  interface OtherInfo {
    title: string,
    formations: Formation[]
  }
  
  interface HardSkill {
    cover: string,
    subs: string[],
    name: string,
    years: number,
    yearsVerbiage: string,
  }
  
  interface SoftSkills {
    title: string,
    skills: string[]
  }
}