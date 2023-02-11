export interface Experience {
  cover: string,
  remote: boolean,
  jobTitle: string,
  company: string,
  startDate: Date,
  endDate: Date,
  jobDescription: string
}

export interface Footer {
  createdAt: Date,
  developedBy: string,
  copyRights: string,
}

export interface Header {
  imageUrl: string,
  imageAlt: string,
  name: string,
  title: string
}

export interface Formation {
  degree: string,
  institution: string,
  graduatedAt: Date,
  graduatedAtVerbiage: string,
}

export interface OtherInfo {
  title: string,
  formations: Formation[]
}

export interface HardSkill {
  cover: string,
  subs: string[],
  name: string,
  years: number,
  yearsVerbiage: string,
}

export interface SoftSkills {
  title: string,
  skills: string[]
}