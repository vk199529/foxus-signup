export const QUESTIONS = {
  mobile: [
    {
      id: "keep_number",
      label: "Do you want to keep your current number?",
      type: "select",
      options: ["Yes", "No"]
    },
    {
      id: "carrier",
      label: "Current carrier",
      type: "text"
    }
  ],

  nbn: [
    {
      id: "install_date",
      label: "Preferred install date",
      type: "date"
    },
    {
      id: "modem",
      label: "Need modem?",
      type: "select",
      options: ["Yes", "No"]
    }
  ]
};