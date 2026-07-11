import { Skeleton } from "@/components/ui/skeleton";

export default function TaskSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="rounded-lg border p-6 space-y-4"
        >
          <Skeleton className="h-6 w-1/3" />

          <Skeleton className="h-4 w-full" />

          <Skeleton className="h-4 w-2/3" />

          <div className="flex gap-3">
            <Skeleton className="h-6 w-24" />

            <Skeleton className="h-6 w-20" />
          </div>

          <div className="flex gap-3">
            <Skeleton className="h-10 w-20" />

            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}