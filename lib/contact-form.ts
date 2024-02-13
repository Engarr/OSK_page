export type FormData = {
  yourName: string;
  yourPhone: string;
  yourEmail: string;
};

export const sendFormData = async (data: FormData, url: string) => {
  let formBody = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formBody.append(key, value.toString());
  }
  formBody.append('_wpcf7_unit_tag', '_wpcf7_unit_tag');
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formBody,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
