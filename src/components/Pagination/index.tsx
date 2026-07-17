import type { PaginationState } from "../../types";

interface paginationProps {
  pagination: PaginationState;
  changePagination: (newPage: number) => void;
}
const Pagination = ({ pagination, changePagination }: paginationProps) => {
  const totalPages = Math.ceil(pagination.totalItems / pagination.itemsPerPage);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <button
        onClick={() => changePagination(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300 transition-colors cursor-pointer"
      >
        Anterior
      </button>
      <button
        onClick={() => changePagination(pagination.currentPage + 1)}
        disabled={totalPages === pagination.currentPage}
        className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300 transition-colors cursor-pointer"
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;
