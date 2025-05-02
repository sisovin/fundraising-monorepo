import axios from 'axios';

export const generateUrgencyIndicator = async (text: string): Promise<string> => {
  try {
    const response = await axios.post('/api/generate-urgency', { text });
    return response.data.urgencyIndicator;
  } catch (error) {
    console.error('Error generating urgency indicator:', error);
    throw new Error('Failed to generate urgency indicator');
  }
};

export const analyzeDonationImpact = async (donationAmount: number): Promise<string> => {
  try {
    const response = await axios.post('/api/analyze-impact', { donationAmount });
    return response.data.impactAnalysis;
  } catch (error) {
    console.error('Error analyzing donation impact:', error);
    throw new Error('Failed to analyze donation impact');
  }
};
