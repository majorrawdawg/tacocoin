async function createProposal() {
  const description = document.getElementById('description').value;
  const recipient = document.getElementById('recipient').value;
  const value = document.getElementById('value').value;

  try {
    const response = await fetch('/createProposal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, recipient, value }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Proposal created successfully:', data);
  } catch (error) {
    console.error('Error creating proposal:', error.message);
    console.error(error.stack);
  }
}

document.getElementById('createProposalBtn').addEventListener('click', createProposal);