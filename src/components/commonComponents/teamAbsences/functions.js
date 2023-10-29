import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

export const handleDateChange = (date, setSelectedDate) => {
    setSelectedDate(date);
};

export const handleRequest = (e, setSelectedRequest) => {
    setSelectedRequest(e.target.value);
};

export const filterData = (selectedRequest, searchValue, selectedDate, absencesData) => {
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();

    return absencesData.filter(request =>
        (selectedRequest !== "default" ? request.requestType === selectedRequest : true) &&
        (searchValue ? request.id.includes(searchValue) : true) &&
        (new Date(request.date).getMonth() === selectedMonth && new Date(request.date).getFullYear() === selectedYear)
    );
};

export const handleApprove = () => {
    Swal.fire({
        title: '¿Estás seguro/a de que quieres aprobar esta solicitud?',
        icon: 'warning',
        iconColor: '#426DA9',
        showCancelButton: true,
        confirmButtonColor: '#426DA9',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡aprobar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            //
        }
    })
};

export const handleDecline = () => {
    Swal.fire({
        title: '¿Estás seguro/a de que quieres declinar esta solicitud?',
        icon: 'warning',
        iconColor: '#426DA9',
        showCancelButton: true,
        confirmButtonColor: '#426DA9',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡declinar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            //
        }
    })
};

export const exportToExcel = (filteredData) => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "TeamAbsences");
    XLSX.writeFile(wb, "TeamAbsences.xlsx");
};
