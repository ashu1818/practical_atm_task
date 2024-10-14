export const calculateDeduction = (amount, availableNotes) => {
  const notesOrder = [2000, 500, 200, 100];
  let remainingAmount = amount;
  let dispensedNotes = {};
  let remainingNotes = {...availableNotes};

  for (let note of notesOrder) {
    const requiredNotes = Math.floor(remainingAmount / note);
    const available = remainingNotes[note];

    if (requiredNotes > 0) {
      const dispensed = Math.min(requiredNotes, available);
      if (dispensed > 0) {
        dispensedNotes[note] = dispensed;
        remainingNotes[note] -= dispensed;
        remainingAmount -= dispensed * note;
      }
    }
  }

  if (remainingAmount > 0) {
    return {dispensedNotes: null, remainingNotes: availableNotes};
  }

  return {dispensedNotes, remainingNotes};
};
