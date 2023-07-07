export default function Pagination({ currentPage, pageCount, onPageChange }) {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-100 mt-10">
      <button
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {[...Array(pageCount)].map((_, index) => (
        <button
          key={index}
          type="button"
          title={`Page ${index + 1}`}
          className={`inline-flex items-center justify-center w-8 h-8 text-sm ${
            index === currentPage
              ? 'font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400'
              : 'border rounded shadow-md dark:bg-gray-900 dark:border-gray-800'
          }`}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}
      <button
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount - 1}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  )
}
