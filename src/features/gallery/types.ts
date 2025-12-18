export interface BenchmarkScores {
    beauty: number;
    coherence: number;
    precision: number;
}

export interface Benchmark {
    id: string;
    model: string;
    category: string;
    code: string;
    scores: BenchmarkScores;
    description: string;
}

export interface BenchmarkData {
    benchmarks: Benchmark[];
}
