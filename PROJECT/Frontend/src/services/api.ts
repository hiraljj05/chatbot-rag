// // // // src/services/api.ts
// // // interface BackendResponse {
// // //     generated_response: string;
// // //     error?: string;
// // // }

// // // interface AttendanceResponse {
// // //     roll_number: string;
// // //     attendance: string;
// // //     error?: string;
// // // }

// // // export const searchQuery = async (query: string): Promise<{ summary: string; results: string[] }> => {
// // //     try {
// // //         const response = await fetch('http://localhost:5000/search', {
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify({ query }),
// // //         });

// // //         const data: BackendResponse = await response.json();

// // //         if (response.ok && data.generated_response) {
// // //             return { summary: data.generated_response, results: [] };
// // //         } else {
// // //             return { summary: data.error || 'Sorry, I couldn’t process that. Can you try again?', results: [] };
// // //         }
// // //     } catch (error) {
// // //         console.error('Error fetching response from Flask backend:', error);
// // //         throw new Error('Failed to fetch response from the server.');
// // //     }
// // // };

// // // export const getAttendance = async (rollNumber: string): Promise<{ rollNumber: string; attendance: string }> => {
// // //     try {
// // //         const response = await fetch('http://localhost:5000/get-attendance', {
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //             },
// // //             body: JSON.stringify({ rollNumber }),
// // //         });

// // //         const data: AttendanceResponse = await response.json();

// // //         if (response.ok && data.attendance) {
// // //             return { rollNumber: data.roll_number, attendance: data.attendance };
// // //         } else {
// // //             throw new Error(data.error || 'Failed to fetch attendance.');
// // //         }
// // //     } catch (error) {
// // //         console.error('Error fetching attendance:', error);
// // //         throw error;
// // //     }
// // //   };

// // const API_BASE_URL = "https://bbd9-2405-201-c006-5003-c17a-bec3-7663-496d.ngrok-free.app";


// // interface BackendResponse {
// //     generated_response: string;
// //     error?: string;
// // }

// // interface AttendanceResponse {
// //     roll_number: string;
// //     attendance: string;
// //     error?: string;
// // }

// // export const searchQuery = async (query: string): Promise<{ summary: string; results: string[] }> => {
// //     try {
// //         const response = await fetch(`${API_BASE_URL}/search`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ query }),
// //         });

// //         const data: BackendResponse = await response.json();

// //         if (response.ok && data.generated_response) {
// //             return { summary: data.generated_response, results: [] };
// //         } else {
// //             return { summary: data.error || 'Sorry, I couldn’t process that. Can you try again?', results: [] };
// //         }
// //     } catch (error) {
// //         console.error('Error fetching response from Flask backend:', error);
// //         throw new Error('Failed to fetch response from the server.');
// //     }
// // };

// // export const getAttendance = async (rollNumber: string): Promise<{ rollNumber: string; attendance: string }> => {
// //     try {
// //         const response = await fetch(`${API_BASE_URL}/get-attendance`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ rollNumber }),
// //         });

// //         const data: AttendanceResponse = await response.json();

// //         if (response.ok && data.attendance) {
// //             return { rollNumber: data.roll_number, attendance: data.attendance };
// //         } else {
// //             throw new Error(data.error || 'Failed to fetch attendance.');
// //         }
// //     } catch (error) {
// //         console.error('Error fetching attendance:', error);
// //         throw error;
// //     }
// // };



// const API_BASE_URL = "https://bbd9-2405-201-c006-5003-c17a-bec3-7663-496d.ngrok-free.app";
// interface BackendResponse {
//     generated_response: string;
//     error?: string;
// }

// interface AttendanceResponse {
//     url: boolean;
//     message: string;
//     roll_number: string;
//     attendance: string;
//     error?: string;
// }

// export const searchQuery = async (query: string): Promise<{ summary: string; results: string[] }> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/search`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ query }),
//         });

//         const data: BackendResponse = await response.json();

//         if (response.ok && data.generated_response) {
//             return { summary: data.generated_response, results: [] };
//         } else {
//             return { summary: data.error || 'Sorry, I couldn’t process that. Can you try again?', results: [] };
//         }
//     } catch (error) {
//         console.error('Error fetching response from Flask backend:', error);
//         throw new Error('Failed to fetch response from the server.');
//     }
// };
// export const getAttendance = async (rollNumber: string): Promise<{ message: string; url: string }> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/get-attendance`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ rollNumber }),
//         });

//         const data: AttendanceResponse = await response.json();

//         if (response.ok && data.url) {
//             return { message: data.message, url: data.url };
//         } else {
//             throw new Error(data.error || 'Failed to fetch attendance.');
//         }
//     } catch (error) {
//         console.error('Error fetching attendance:', error);
//         throw error;
//     }
// };




const API_BASE_URL = "https://8a0c-2401-4900-367a-7ff0-214c-31c5-6c92-4714.ngrok-free.app";

interface BackendResponse {
    generated_response: string;
    error?: string;
}

interface AttendanceResponse {
    url: string;
    message: string;
    roll_number: string;
    attendance: string;
    error?: string;
}

export const searchQuery = async (query: string): Promise<{ summary: string; results: string[] }> => {
    try {
        const response = await fetch(`${API_BASE_URL}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const data: BackendResponse = await response.json();

        if (response.ok && data.generated_response) {
            return { summary: data.generated_response, results: [] };
        } else {
            return { summary: data.error || 'Sorry, I couldn’t process that. Can you try again?', results: [] };
        }
    } catch (error) {
        console.error('Error fetching response from Flask backend:', error);
        throw new Error('Failed to fetch response from the server.');
    }
};

export const getAttendance = async (rollNumber: string): Promise<{ message: string; url: string }> => {
    try {
        const response = await fetch(`${API_BASE_URL}/get-attendance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rollNumber }),
        });

        const data: AttendanceResponse = await response.json();

        if (response.ok && data.url && data.message) {
            return { message: data.message, url: data.url };
        } else {
            throw new Error(data.error || 'Failed to fetch attendance.');
        }
    } catch (error) {
        console.error('Error fetching attendance:', error);
        throw error;
    }
};
