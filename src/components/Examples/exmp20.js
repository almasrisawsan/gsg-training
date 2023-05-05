function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const fullName = firstName + "" + lastName;
  // 🔴 Avoid: redundant state and unnecessary Effect
  //   const [fullName, setFullName] = useState("");

  //   useEffect(() => {
  //     setFullName(firstName + " " + lastName);
  //   }, [firstName, lastName]);
  // ...
}
