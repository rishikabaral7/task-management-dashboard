import React from "react";

const WelcomeSection = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
            Welcome back
        </h1>
        <p className="mt-2 text-muted-foreground">
            {formattedDate}
        </p>
    </section>
  );
};

export default WelcomeSection;
