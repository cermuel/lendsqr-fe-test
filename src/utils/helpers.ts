export const formatDateTime = (
  input: string,
  defaultTime = "10:00:00"
): string => {
  let date: Date;

  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    date = new Date(`${input}T${defaultTime}`);
  } else {
    date = new Date(input);
  }

  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatNaira = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);
};
