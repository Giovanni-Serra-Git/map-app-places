import { useMemo } from "react"
;

function useFormatDate(date) {
    return useMemo(() => {
        if (!date || isNaN(new Date(date).getTime())) {
            return "Invalid Date";
        }

        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",  // Forza l'uso di UTC (opzionale)
        }).format(new Date(date));
    }, [date])
}

export default useFormatDate
