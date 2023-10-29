import * as XLSX from 'xlsx';

export const exportToExcel = (filteredData) => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "AbsencesRecord");
    XLSX.writeFile(wb, "AbsencesRecord.xlsx");
};

export const filterData = (selectedRequest, searchValue, selectedDate, requests) => {
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();

    return requests.filter(request =>
        (selectedRequest !== "default" ? request.requestType === selectedRequest : true) &&
        (searchValue ? request.id.includes(searchValue) : true) &&
        (new Date(request.date).getMonth() === selectedMonth && new Date(request.date).getFullYear() === selectedYear)
    );
};
