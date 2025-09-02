'use client';
import { useEffect, useState } from "react";
import Papa, {ParseResult} from "papaparse";
import CSVTable from "@/components/CSVTable";
import DashboardLayout from "@/components/DashboardLayout";

type CSVRow = Record<string, string>;

export default function CSVPage() {
    const [data, setData] = useState<CSVRow[]>([]);
    const [fields, setFields] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/pegawai_db.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: (results: ParseResult<CSVRow>) => {
                        setData(results.data);
                        setFields(results.meta.fields || []);
                        setLoading(false);
                    },
                });
            });
    }, []);

    return (
        <DashboardLayout>
            <h2 className="text-2xl font-bold mb-6">CSV Viewer</h2>
            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : (
                <CSVTable data={data} fields={fields} />
            )}
        </DashboardLayout>
    );
}