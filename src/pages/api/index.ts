export const  predictApi = async (url: string)=> {
    try {
        const response = await fetch('https://linkgad.replit.app/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return error
    }
}
