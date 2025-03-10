"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@/components/ui/pagination";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
	RiArrowDownSLine,
	RiArrowUpSLine,
	RiBardLine,
	RiCheckLine,
	RiCloseCircleLine,
	RiDeleteBinLine,
	RiErrorWarningLine,
	RiFilter3Line,
	RiMoreLine,
	RiSearch2Line,
	RiVerifiedBadgeFill,
} from "@remixicon/react";
import {
	type ColumnDef,
	type ColumnFiltersState,
	type FilterFn,
	type PaginationState,
	type SortingState,
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import {
	useEffect,
	useId,
	useMemo,
	useRef,
	useState,
	useTransition,
} from "react";

type Item = {
	id: string;
	image: string;
	name: string;
	status: string;
	location: string;
	verified: boolean;
	referral: {
		name: string;
		image: string;
	};
	value: number;
	joinDate: string;
};

const statusFilterFn: FilterFn<Item> = (
	row,
	columnId,
	filterValue: string[],
) => {
	if (!filterValue?.length) return true;
	const status = row.getValue(columnId) as string;
	return filterValue.includes(status);
};

interface GetColumnsProps {
	data: Item[];
	setData: React.Dispatch<React.SetStateAction<Item[]>>;
}

const getColumns = ({ data, setData }: GetColumnsProps): ColumnDef<Item>[] => [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		size: 28,
		enableSorting: false,
		enableHiding: false,
	},
	{
		header: "Name",
		accessorKey: "name",
		cell: ({ row }) => (
			<div className="flex items-center space-x-3">
				<div className="flex-shrink-0">
					<Image
						className="size-8 rounded-full object-cover"
						src={row.original.image}
						width={32}
						height={32}
						alt={row.getValue("name")}
					/>
				</div>
				<span className="truncate font-medium">{row.getValue("name")}</span>
			</div>
		),
		size: 180,
		enableHiding: false,
	},
	{
		header: "ID",
		accessorKey: "id",
		cell: ({ row }) => (
			<span className="text-muted-foreground">{row.getValue("id")}</span>
		),
		size: 110,
	},
	{
		header: "Status",
		accessorKey: "status",
		cell: ({ row }) => (
			<div className="flex h-full items-center">
				<Badge
					variant="outline"
					className={cn(
						"gap-1 px-2 py-0.5 text-sm",
						row.original.status === "Inactive"
							? "text-muted-foreground"
							: "text-muted-foreground",
					)}
				>
					{row.original.status === "Active" && (
						<RiCheckLine
							className="text-emerald-500"
							size={14}
							aria-hidden="true"
						/>
					)}
					{row.original.status === "Inactive" && "- "}
					{row.original.status}
				</Badge>
			</div>
		),
		size: 110,
		filterFn: statusFilterFn,
	},
	{
		header: "Location",
		accessorKey: "location",
		cell: ({ row }) => (
			<span className="text-muted-foreground">{row.getValue("location")}</span>
		),
		size: 140,
	},
	{
		header: "Verified",
		accessorKey: "verified",
		cell: ({ row }) => (
			<div>
				<span className="sr-only">
					{row.original.verified ? "Verified" : "Not Verified"}
				</span>
				<RiVerifiedBadgeFill
					size={20}
					className={cn(
						row.original.verified
							? "fill-emerald-600"
							: "fill-muted-foreground/50",
					)}
					aria-hidden="true"
				/>
			</div>
		),
		size: 90,
	},
	{
		header: "Referral",
		accessorKey: "referral",
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<Image
					className="rounded-full"
					src={row.original.referral.image}
					width={20}
					height={20}
					alt={row.original.referral.name}
				/>
				<div className="text-muted-foreground">
					{row.original.referral.name}
				</div>
			</div>
		),
		size: 140,
	},
	{
		header: "Value",
		accessorKey: "value",
		cell: ({ row }) => {
			const value = row.getValue("value") as number;
			return (
				<TooltipProvider delayDuration={0}>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className="flex h-full w-full items-center">
								<Progress className="h-1 max-w-14" value={value} />
							</div>
						</TooltipTrigger>
						<TooltipContent align="start" sideOffset={-8}>
							<p>{value}%</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			);
		},
		size: 80,
	},
	{
		id: "actions",
		header: () => <span className="sr-only">Actions</span>,
		cell: ({ row }) => (
			<RowActions setData={setData} data={data} item={row.original} />
		),
		size: 60,
		enableHiding: false,
	},
];

export default function ContactsTable() {
	const id = useId();
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const inputRef = useRef<HTMLInputElement>(null);

	const [sorting, setSorting] = useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	]);

	const [data, setData] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const columns = useMemo(() => getColumns({ data, setData }), [data]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const res = await fetch(
					"https://res.cloudinary.com/dlzlfasou/raw/upload/users-02_mohkpe.json",
				);
				const data = await res.json();
				setData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchPosts();
	}, []);

	const handleDeleteRows = () => {
		const selectedRows = table.getSelectedRowModel().rows;
		const updatedData = data.filter(
			(item) => !selectedRows.some((row) => row.original.id === item.id),
		);
		setData(updatedData);
		table.resetRowSelection();
	};

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		enableSortingRemoval: false,
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		state: {
			sorting,
			pagination,
			columnFilters,
			columnVisibility,
		},
	});

	// Extract complex expressions into separate variables
	const statusColumn = table.getColumn("status");
	const statusFacetedValues = statusColumn?.getFacetedUniqueValues();
	const statusFilterValue = statusColumn?.getFilterValue();

	// Update useMemo hooks with simplified dependencies
	const uniqueStatusValues = useMemo(() => {
		if (!statusColumn) return [];
		const values = Array.from(statusFacetedValues?.keys() ?? []);
		return values.sort();
	}, [statusColumn, statusFacetedValues]);

	const statusCounts = useMemo(() => {
		if (!statusColumn) return new Map();
		return statusFacetedValues ?? new Map();
	}, [statusColumn, statusFacetedValues]);

	const selectedStatuses = useMemo(() => {
		return (statusFilterValue as string[]) ?? [];
	}, [statusFilterValue]);

	const handleStatusChange = (checked: boolean, value: string) => {
		const filterValue = table.getColumn("status")?.getFilterValue() as string[];
		const newFilterValue = filterValue ? [...filterValue] : [];

		if (checked) {
			newFilterValue.push(value);
		} else {
			const index = newFilterValue.indexOf(value);
			if (index > -1) {
				newFilterValue.splice(index, 1);
			}
		}

		table
			.getColumn("status")
			?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
	};

	return (
		<div className="space-y-4">
			{/* Actions */}
			<div className="flex flex-wrap items-center justify-between gap-3">
				{/* Left side */}
				<div className="flex items-center gap-3">
					{/* Filter by name */}
					<div className="relative">
						<Input
							id={`${id}-input`}
							ref={inputRef}
							className={cn(
								"peer min-w-60 ps-9",
								Boolean(table.getColumn("name")?.getFilterValue()) && "pe-9",
							)}
							value={
								(table.getColumn("name")?.getFilterValue() ?? "") as string
							}
							onChange={(e) =>
								table.getColumn("name")?.setFilterValue(e.target.value)
							}
							placeholder="Search by name"
							type="text"
							aria-label="Search by name"
						/>
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/60 peer-disabled:opacity-50">
							<RiSearch2Line size={20} aria-hidden="true" />
						</div>
						{Boolean(table.getColumn("name")?.getFilterValue()) && (
							<button
								className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/60 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
								aria-label="Clear filter"
								onClick={() => {
									table.getColumn("name")?.setFilterValue("");
									if (inputRef.current) {
										inputRef.current.focus();
									}
								}}
							>
								<RiCloseCircleLine size={16} aria-hidden="true" />
							</button>
						)}
					</div>
				</div>
				{/* Right side */}
				<div className="flex items-center gap-3">
					{/* Delete button */}
					{table.getSelectedRowModel().rows.length > 0 && (
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="ml-auto" variant="outline">
									<RiDeleteBinLine
										className="-ms-1 opacity-60"
										size={16}
										aria-hidden="true"
									/>
									Delete
									<span className="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
										{table.getSelectedRowModel().rows.length}
									</span>
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
									<div
										className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
										aria-hidden="true"
									>
										<RiErrorWarningLine className="opacity-80" size={16} />
									</div>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete{" "}
											{table.getSelectedRowModel().rows.length} selected{" "}
											{table.getSelectedRowModel().rows.length === 1
												? "row"
												: "rows"}
											.
										</AlertDialogDescription>
									</AlertDialogHeader>
								</div>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction onClick={handleDeleteRows}>
										Delete
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)}
					{/* Filter by status */}
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline">
								<RiFilter3Line
									className="-ms-1.5 size-5 text-muted-foreground/60"
									size={20}
									aria-hidden="true"
								/>
								Filter
								{selectedStatuses.length > 0 && (
									<span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
										{selectedStatuses.length}
									</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto min-w-36 p-3" align="end">
							<div className="space-y-3">
								<div className="font-medium text-muted-foreground/60 text-xs uppercase">
									Status
								</div>
								<div className="space-y-3">
									{uniqueStatusValues.map((value, i) => (
										<div key={value} className="flex items-center gap-2">
											<Checkbox
												id={`${id}-${i}`}
												checked={selectedStatuses.includes(value)}
												onCheckedChange={(checked: boolean) =>
													handleStatusChange(checked, value)
												}
											/>
											<Label
												htmlFor={`${id}-${i}`}
												className="flex grow justify-between gap-2 font-normal"
											>
												{value}{" "}
												<span className="ms-2 text-muted-foreground text-xs">
													{statusCounts.get(value)}
												</span>
											</Label>
										</div>
									))}
								</div>
							</div>
						</PopoverContent>
					</Popover>
					{/* New filter button */}
					<Button variant="outline">
						<RiBardLine
							className="-ms-1.5 size-5 text-muted-foreground/60"
							size={20}
							aria-hidden="true"
						/>
						New Filter
					</Button>
				</div>
			</div>

			{/* Table */}
			<Table className="table-fixed border-separate border-spacing-0 [&_tr:not(:last-child)_td]:border-b">
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id} className="hover:bg-transparent">
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										style={{ width: `${header.getSize()}px` }}
										className="relative h-9 select-none border-border border-y bg-sidebar first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r"
									>
										{header.isPlaceholder ? null : header.column.getCanSort() ? (
											<div
												className={cn(
													header.column.getCanSort() &&
														"flex h-full cursor-pointer select-none items-center gap-2",
												)}
												onClick={header.column.getToggleSortingHandler()}
												onKeyDown={(e) => {
													// Enhanced keyboard handling for sorting
													if (
														header.column.getCanSort() &&
														(e.key === "Enter" || e.key === " ")
													) {
														e.preventDefault();
														header.column.getToggleSortingHandler()?.(e);
													}
												}}
												tabIndex={header.column.getCanSort() ? 0 : undefined}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
												{{
													asc: (
														<RiArrowUpSLine
															className="shrink-0 opacity-60"
															size={16}
															aria-hidden="true"
														/>
													),
													desc: (
														<RiArrowDownSLine
															className="shrink-0 opacity-60"
															size={16}
															aria-hidden="true"
														/>
													),
												}[header.column.getIsSorted() as string] ?? null}
											</div>
										) : (
											flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)
										)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<tbody aria-hidden="true" className="table-row h-1"></tbody>
				<TableBody>
					{isLoading ? (
						<TableRow className="hover:bg-transparent [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
							<TableCell colSpan={columns.length} className="h-24 text-center">
								Loading...
							</TableCell>
						</TableRow>
					) : table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className="h-px border-0 hover:bg-accent/50 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className="h-[inherit] last:py-0">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow className="hover:bg-transparent [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
				<tbody aria-hidden="true" className="table-row h-1"></tbody>
			</Table>

			{/* Pagination */}
			{table.getRowModel().rows.length > 0 && (
				<div className="flex items-center justify-between gap-3">
					<p
						className="flex-1 whitespace-nowrap text-muted-foreground text-sm"
						aria-live="polite"
					>
						Page{" "}
						<span className="text-foreground">
							{table.getState().pagination.pageIndex + 1}
						</span>{" "}
						of <span className="text-foreground">{table.getPageCount()}</span>
					</p>
					<Pagination className="w-auto">
						<PaginationContent className="gap-3">
							<PaginationItem>
								<Button
									variant="outline"
									className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
									onClick={() => table.previousPage()}
									disabled={!table.getCanPreviousPage()}
									aria-label="Go to previous page"
								>
									Previous
								</Button>
							</PaginationItem>
							<PaginationItem>
								<Button
									variant="outline"
									className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
									onClick={() => table.nextPage()}
									disabled={!table.getCanNextPage()}
									aria-label="Go to next page"
								>
									Next
								</Button>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			)}
		</div>
	);
}

function RowActions({
	setData,
	data,
	item,
}: {
	setData: React.Dispatch<React.SetStateAction<Item[]>>;
	data: Item[];
	item: Item;
}) {
	const [isUpdatePending, startUpdateTransition] = useTransition();
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

	const handleStatusToggle = () => {
		startUpdateTransition(() => {
			const updatedData = data.map((dataItem) => {
				if (dataItem.id === item.id) {
					return {
						...dataItem,
						status: item.status === "Active" ? "Inactive" : "Active",
					};
				}
				return dataItem;
			});
			setData(updatedData);
		});
	};

	const handleVerifiedToggle = () => {
		startUpdateTransition(() => {
			const updatedData = data.map((dataItem) => {
				if (dataItem.id === item.id) {
					return {
						...dataItem,
						verified: !item.verified,
					};
				}
				return dataItem;
			});
			setData(updatedData);
		});
	};

	const handleDelete = () => {
		startUpdateTransition(() => {
			const updatedData = data.filter((dataItem) => dataItem.id !== item.id);
			setData(updatedData);
			setShowDeleteDialog(false);
		});
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex justify-end">
						<Button
							size="icon"
							variant="ghost"
							className="text-muted-foreground/60 shadow-none"
							aria-label="Edit item"
						>
							<RiMoreLine className="size-5" size={20} aria-hidden="true" />
						</Button>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-auto">
					<DropdownMenuGroup>
						<DropdownMenuItem
							onClick={handleStatusToggle}
							disabled={isUpdatePending}
						>
							{item.status === "Active"
								? "Deactivate contact"
								: "Activate contact"}
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={handleVerifiedToggle}
							disabled={isUpdatePending}
						>
							{item.verified ? "Unverify contact" : "Verify contact"}
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => setShowDeleteDialog(true)}
						variant="destructive"
						className="dark:data-[variant=destructive]:focus:bg-destructive/10"
					>
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete this
							contact.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel disabled={isUpdatePending}>
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleDelete}
							disabled={isUpdatePending}
							className="bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
