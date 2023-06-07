module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  // const [firstName, lastName] = fullName.split(' ');
  const [firstName, lastName] = fullName.trim().split(/\s+/);

  console.log('firstName:', firstName);
  console.log('lastName:', lastName);
  if (!firstName || !lastName) return 'Error';
  // if (fullName.split(' ').length !== 2) return 'Error';
  if (fullName.trim().split(/\s+/).length !== 2) return 'Error';
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
