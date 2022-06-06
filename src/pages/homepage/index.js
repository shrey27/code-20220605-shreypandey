import { useState } from "react";
import { Header, Explore } from "../../components";
import { defaultForm } from "../../utility/constant";

export default function Homepage() {
  const [form, setForm] = useState(defaultForm);
  const [details, setDetails] = useState(defaultForm);

  const headerProps = {
    setForm,
    details,
    setDetails,
  };
  const exploreProps = {
    form,
    setForm,
    setDetails,
  };

  return (
    <div>
      <Header {...headerProps} />
      <Explore {...exploreProps} />
    </div>
  );
}
