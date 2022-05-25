export const functionDataFormated = (data: any) => {
  let dataFormated = data.split(" ").slice(1, 4)[1];

  let day = data.split(" ").slice(1, 4)[0];

  let year = data.split(" ").slice(1, 4)[2];

  if (dataFormated === "Jan") {
    dataFormated = "01";
  }
  if (dataFormated === "Feb") {
    dataFormated = "02";
  }
  if (dataFormated === "Mar") {
    dataFormated = "03";
  }
  if (dataFormated === "Apr") {
    dataFormated = "04";
  }
  if (dataFormated === "May") {
    dataFormated = "05";
  }
  if (dataFormated === "June") {
    dataFormated = "06";
  }
  if (dataFormated === "Jul") {
    dataFormated = "07";
  }
  if (dataFormated === "Aug") {
    dataFormated = "08";
  }
  if (dataFormated === "Sept") {
    dataFormated = "09";
  }
  if (dataFormated === "Oct") {
    dataFormated = "10";
  }
  if (dataFormated === "Nov") {
    dataFormated = "11";
  }
  if (dataFormated === "Dec") {
    dataFormated = "12";
  }

  return `${year}-${dataFormated}-${day}`;
};

export const functionDataFormatedPTBR = (data: string) => {
  let dataFormated = data.split(" ").slice(1, 4)[1];

  let day = data.split(" ").slice(1, 4)[0];

  let year = data.split(" ").slice(1, 4)[2];

  if (dataFormated === "Jan") {
    dataFormated = "01";
  }
  if (dataFormated === "Feb") {
    dataFormated = "02";
  }
  if (dataFormated === "Mar") {
    dataFormated = "03";
  }
  if (dataFormated === "Apr") {
    dataFormated = "04";
  }
  if (dataFormated === "May") {
    dataFormated = "05";
  }
  if (dataFormated === "June") {
    dataFormated = "06";
  }
  if (dataFormated === "Jul") {
    dataFormated = "07";
  }
  if (dataFormated === "Aug") {
    dataFormated = "08";
  }
  if (dataFormated === "Sept") {
    dataFormated = "09";
  }
  if (dataFormated === "Oct") {
    dataFormated = "10";
  }
  if (dataFormated === "Nov") {
    dataFormated = "11";
  }
  if (dataFormated === "Dec") {
    dataFormated = "12";
  }

  return `${day}-${dataFormated}-${year}`;
};
