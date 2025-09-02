'use client';
type CSVRow = Record<string, string>;

interface CSVTableProps {
    data: CSVRow[];
    fields: string[];
};

export default function CSVTable({ data, fields }: CSVTableProps) {
    if (!data.length) {
        return <p className="text-gray-500">No data available</p>;
    }

    return (
        <div className="overflow-auto border rounded">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100 dark:bg-neutral-800">
                        <tr>
                            {fields.map((field) => (
                                <th
                                    key={field}
                                    className="px-4 py-2 border font-semibold text-left text-sm text-gray-700 dark:text-gray-200"
                                >
                                    {field}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="dark:hover:bg-neutral-900 hover:bg-gray-50"
                            >
                                {fields.map((field) => (
                                    <td
                                        key={field}
                                        className={`px-4 py-2 border whitespace-nowrap text-sm ${
                                            !row[field] ? "bg-red-100 text-red-700" : ""
                                        }`}
                                    >
                                        {row[field] ?? "-"}
                                    </td>
                                ))}
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
    );
}