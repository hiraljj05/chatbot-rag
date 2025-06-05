// collegeData.ts

import supabase from "../Supabase";
import { CollegeData } from "types";

// Existing interfaces (from previous responses) remain unchanged
export interface CollegeInfo {
    id: string;
    name: string;
    established_year: number;
    affiliation: string;
    approval: string;
    location: string;
    mission: string;
    vision: string;
    objectives: string[];
    core_values: string;
    created_at: string;
}

export interface AcademicRegulations {
    id: string;
    description: string;
    evaluation_methods: string[];
    activities: string[];
    monitored_by: string;
    created_at: string;
}

export interface BTechRegulation {
    id: string;
    regulation_code: string;
    program: string;
    created_at: string;
}

export interface YearlyRegulation {
    id: string;
    academic_year: string;
    i_year_regulation: string;
    ii_year_regulation: string;
    iii_year_regulation: string;
    iv_year_regulation: string;
    created_at: string;
}

export interface IICInfo {
    id: string;
    description: string;
    functions: string[];
    created_at: string;
}

export interface IDMCMember {
    id: string;
    name: string;
    department: string;
    designation: string;
    created_at: string;
}

export interface PerspectivePlan {
    id: string;
    description: string;
    innovations: string[];
    created_at: string;
}

export interface HRPolicy {
    id: string;
    description: string;
    created_at: string;
}

export interface Course {
    id: string;
    degree: string;
    name: string;
    total_intake: number;
    management_seats: number;
    convenor_seats: number;
    start_year?: number;
    created_at: string;
}

export interface AdmissionsInfo {
    id: string;
    eligibility_criteria: string;
    admission_pattern: string;
    fee_structure: {
        year: string;
        i_year: { tuition_fee: number; special_fee: number; nba_fee: number };
        ii_year: { tuition_fee: number; special_fee: number; nba_fee: number };
        iii_year: { tuition_fee: number; special_fee: number; nba_fee: number };
        iv_year: { tuition_fee: number; special_fee: number; nba_fee: number };
    };
    nri_fee_usd: number;
    application_fee: number;
    last_date_application: string;
    created_at: string;
}

export interface ContactInfo {
    id: string;
    phone_number: string;
    address: string;
    website: string;
    created_at: string;
}

export interface Event {
    id: string;
    name: string;
    date: string;
    description: string;
    activities: string[];
    created_at: string;
}

export interface IFSProgram {
    id: string;
    name: string;
    description: string;
    duration_hours: number;
    prerequisite?: string;
    created_at: string;
}

export interface IFSOutcome {
    id: string;
    description: string;
    created_at: string;
}

export interface IFSDelivery {
    id: string;
    description: string;
    platforms: string[];
    features: string[];
    created_at: string;
}

export interface Committees {
    id: string;
    name: string;
    description: string;
    functions?: string[];
    objectives?: string[];
    responsibilities?: string[];
    created_at: string;
}

export interface CommitteeMember {
    id: string;
    committee_name: string;
    name: string;
    department: string;
    designation: string;
    created_at: string;
}

export interface StudentCouncil {
    id: string;
    description: string;
    objectives: string[];
    created_at: string;
}

export interface StudentCouncilRepresentative {
    id: string;
    name: string;
    roll_number: string;
    designation: string;
    academic_year: string;
    created_at: string;
}

export interface Club {
    id: string;
    name: string;
    description: string;
    created_at: string;
}

export interface ClubEvent {
    id: string;
    club_name: string;
    name: string;
    date: string;
    description: string;
    created_at: string;
}

export interface NSSEvent {
    id: string;
    name: string;
    date: string;
    description: string;
    faculties_participated: number;
    students_participated: number;
    created_at: string;
}

export interface AlumniInfo {
    id: string;
    description: string;
    website: string;
    contact_name: string;
    contact_designation: string;
    contact_number: string;
    created_at: string;
}

export interface PlacementAchievement {
    id: string;
    student_name: string;
    roll_number: string;
    description: string;
    year: string;
    created_at: string;
}

export interface PlacementStats {
    id: string;
    academic_year: string;
    companies_visited: number;
    offers_rolled_out: number;
    students_placed: number;
    total_students: number;
    average_salary_lpa: number;
    salary_highlights: {
        above_40_lpa: number;
        between_30_40_lpa: number;
        between_20_30_lpa: number;
        between_10_20_lpa: number;
        between_8_10_lpa: number;
        between_6_8_lpa: number;
        between_5_6_lpa: number;
    };
    created_at: string;
}

export interface PlacementCell {
    id: string;
    description: string;
    dean_name: string;
    dean_qualifications: string;
    dean_experience: string;
    created_at: string;
}

export interface HighestPlacement {
    id: string;
    academic_year: string;
    company: string;
    number_of_selects: number;
    internship_per_month?: number | null;
    ctc_per_annum: string;
    created_at: string;
}

// New interfaces for Parts 11 and 12

// Research (Part 11)
export interface ResearchLab {
    id: string;
    name: string;
    description: string;
    created_at: string;
}

export interface RNDCell {
    id: string;
    description: string;
    collaborations: string[];
    created_at: string;
}

export interface ResearchOutcome {
    id: string;
    description: string;
    created_at: string;
}

export interface SpecificResearchLab {
    id: string;
    name: string;
    description: string;
    projects?: string[];
    created_at: string;
}

export interface ResearchFaculty {
    id: string;
    lab_name: string;
    name: string;
    created_at: string;
}

export interface CenterOfExcellence {
    id: string;
    name: string;
    description: string;
    created_at: string;
}

export interface SponsoredResearch {
    id: string;
    name: string;
    description: string;
    funding_agency: string;
    funding_amount: string;
    team: string[];
    created_at: string;
}

// Educational Tools and Teaching Methods (Part 12)
export interface EducationalTool {
    id: string;
    name: string;
    description: string;
    download_link?: string;
    features: string[];
    created_at: string;
}

export interface TeachingMethod {
    id: string;
    description: string;
    methods: string[];
    benefits: string[];
    created_at: string;
}

export interface AudioVisualCentre {
    id: string;
    description: string;
    features: string[];
    created_at: string;
}

export interface GSoCParticipation {
    id: string;
    student_name: string;
    organization: string;
    project_name: string;
    participation_year: string;
    created_at: string;
}
export async function fetchCollegeData(): Promise<CollegeData> {
    try {
        const [
            { data: collegeInfo, error: collegeError },
            { data: placements, error: placementError },
            { data: stats, error: statsError },
            { data: admin, error: adminError },
            { data: syllabus, error: syllabusError },
        ] = await Promise.all([
            supabase.from('college_info').select('*').limit(1),
            supabase.from('highest_placements').select('*').order('academic_year', { ascending: false }).limit(5),
            supabase.from('placement_stats').select('*').order('academic_year', { ascending: false }).limit(5),
            supabase.from('administration_management_lms').select('*'),
            supabase.from('syllabus').select('*').in('department', ['CSE', 'CSM', 'IT', 'CSD']), // Broader filter
        ]);

        if (collegeError || placementError || statsError || adminError || syllabusError) {
            console.error('Fetch error:', collegeError || placementError || statsError || adminError || syllabusError);
            throw new Error('Failed to fetch data');
        }

        return {
            college_info: collegeInfo || [],
            highest_placements: placements || [],
            placement_stats: stats || [],
            administration_management_lms: admin || [],
            syllabus: syllabus || [],
        };
    } catch (error) {
        console.error('Error fetching college data:', error);
        throw error;
    }
}

export async function searchCollegeData(query: string): Promise<string> {
    const lowerQuery = query.toLowerCase().trim();
    const data = await fetchCollegeData();
    console.log('Fetched data:', data); // Debug

    // Handle syllabus queries
    if (lowerQuery.includes('syllabus') || lowerQuery.includes('syllabi') || lowerQuery.includes('course')) {
        // Try regex matching for regulation and department
        const regulationMatch = lowerQuery.match(/(kr-?\d{2})/i); // Support KR24 or KR-24
        const departmentMatch = lowerQuery.match(/\b(cse|csd|csm|it|computer science|information technology)\b/i);

        if (regulationMatch && departmentMatch) {
            const regulation = regulationMatch[1].toUpperCase().replace('-', ''); // Normalize KR-24 to KR24
            const department = departmentMatch[1].toUpperCase().replace('COMPUTER SCIENCE', 'CSE').replace('INFORMATION TECHNOLOGY', 'IT');
            const syllabusUrl = `https://kmit.in/department/syllabus_${regulation.toLowerCase()}_${department.toLowerCase()}.php`;
            return `Syllabus for ${department} (${regulation}): ${syllabusUrl}`;
        }

        // Fallback to Supabase data if available
        const syllabus = data.syllabus;
        if (syllabus.length) {
            const course = syllabus[0];
            return `Syllabus for ${course.course_name} (${course.course_code}, ${course.academic_year}): ${course.syllabus_details}`;
        }

        // Fallback response with guidance
        return `No specific syllabus data found for your query. Please specify a regulation (e.g., KR24) and department (e.g., CSE), or use the syllabus button to select them. Visit https://kmit.in for more details.`;
    }

    // Handle placement queries
    if (lowerQuery.includes('placement')) {
        const placements = data.highest_placements;
        const stats = data.placement_stats;
        if (placements.length || stats.length) {
            let response = '';
            if (placements.length) {
                const latest = placements[0];
                response += `In ${latest.academic_year}, KMIT had ${latest.number_of_selects} students placed at ${latest.company} with a CTC of ${latest.ctc_per_annum}. `;
            }
            if (stats.length) {
                const latestStats = stats[0];
                response += `Overall, ${latestStats.students_placed}/${latestStats.total_students} students were placed (${((latestStats.students_placed / latestStats.total_students) * 100).toFixed(2)}%) with an average salary of ₹${latestStats.average_salary_lpa} LPA. Contact Mr. D. Sudheer Reddy (sudheer@kmit.in) for details.`;
            }
            return response;
        }
        return 'No placement data found.';
    }

    // Handle Deepa Mam
    if (lowerQuery.includes('deepa mam') || lowerQuery.includes('deepa ganu')) {
        const admin = data.administration_management_lms.find((item: { name: string }) =>
            item.name.toLowerCase().includes('deepa')
        );
        if (admin) {
            return `${admin.name} is the ${admin.role} at KMIT. ${admin.details}`;
        }
        return 'No information found for Deepa Mam.';
    }

    // Default response with guidance
    return 'Thanks for your query! Please try specific keywords like "syllabus," "placement," or "contact," or use the interactive buttons for more options.';
}


