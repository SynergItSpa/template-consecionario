import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Inicio",
		url: "/",
	},
	{
		id: "cars",
		label: "Vehículos",
		url: "/cars",
	},
	{
		id: "about",
		label: "Acerca de",
		url: "/about-us",
		submenu: [{ id: "testimonials", label: "Testimonios", url: "/about-us/testimonials" }],
	},
	{
		id: "services",
		label: "Servicios",
		url: "/services",
		submenu: [
			{ id: "repairs", label: "Reparaciones", url: "/services/repairs" },
			{ id: "maintenance", label: "Mantenimiento", url: "/services/maintenance" },
			{ id: "car-sales", label: "Ventas de Vehículos", url: "/services/car-sales" },
		],
	},
	{
		id: "blog",
		label: "Blog",
		url: "/blog",
	},
];

export const menuNavigation: MenuNavigation = {
	prettyName: "Navegación",
	items: [
		{
			name: "Inicio",
			url: "/",
		},
		{
			name: "Vehículos",
			url: "/cars",
		},
		{
			name: "Acerca de Nosotros",
			url: "/about-us",
		},
		{
			name: "Servicios",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuService: MenuNavigation = {
	prettyName: "Servicio",
	items: [
		{
			name: "Inicio",
			url: "/",
		},
		{
			name: "Vehículos",
			url: "/cars",
		},
		{
			name: "Acerca de Nosotros",
			url: "/about-us",
		},
		{
			name: "Servicios",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuMisc: MenuNavigation = {
	prettyName: "Misceláneo",
	items: [
		{
			name: "Inicio",
			url: "/",
		},
		{
			name: "Vehículos",
			url: "/cars",
		},
		{
			name: "Acerca de Nosotros",
			url: "/about-us",
		},
		{
			name: "Servicios",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuLegal: MenuNavigation = {
	prettyName: "Legal",
	items: [
		{
			name: "Inicio",
			url: "/",
		},
		{
			name: "Vehículos",
			url: "/cars",
		},
		{
			name: "Acerca de Nosotros",
			url: "/about-us",
		},
		{
			name: "Servicios",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};
