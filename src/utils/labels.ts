import type { CollectionEntry } from "astro:content";
import { unitSystem } from "~/data/config";

type UnitSystem = "imperial" | "metric";
const unitSystemTyped: UnitSystem = unitSystem as UnitSystem;

type ShapeToLabels<T extends Record<string, any>> = {
	[K in keyof T]: T[K] extends Record<string, any> ? ShapeToLabels<T[K]> : string | Record<string, string>;
};

export const labels: ShapeToLabels<CollectionEntry<"cars">["data"]> = {
	title: "Título",
	image: "Imagen",
	imageAlt: "Texto alternativo de imagen",
	gallery: {
		image: "Imagen",
		alt: "Texto alternativo",
	},
	videoTourUrl: "URL del tour virtual",
	excerpt: "Extracto",
	publishDate: "Fecha de publicación" as unknown as ShapeToLabels<Date>,
	general: {
		make: "Marca",
		model: "Modelo",
		type: "Tipo",
		price: "Precio",
		salePrice: "Precio de venta",
		bodyType: "Tipo de carrocería",
		drivetrain: "Tracción",
		doors: "Puertas",
		seatingCapacity: "Capacidad de asientos",
		condition: "Condición",
		availability: "Disponibilidad",
	},
	history: {
		mileage: unitSystemTyped === "imperial" ? "Kilometraje" : "Kilometraje",
		year: "Año",
		previousOwners: "Propietarios anteriores",
		accidentHistory: "Historial de daños",
	},
	technical: {
		horsePower: "Caballos de fuerza",
		transmission: "Transmisión",
		engineSizeCC: "Cilindrada del motor",
		gears: "Marchas",
		cilinders: "Cilindros",
		weight: "Peso",
	},
	efficiency: {
		fuelType: "Tipo de combustible",
		fuelEfficiencyMPG: "Eficiencia de combustible MPG",
		fuelEfficiencyLPer100KM: "Eficiencia de combustible L/100KM",
		emissionsCO2: "Emisiones CO2",
		emissionsRating: "Clasificación de emisiones",
	},
	options: "Opciones",
	security: {
		alarm: "Alarma",
		immobilizer: "Inmovilizador",
		airbags: "Airbags",
		abs: "ABS",
		esp: "ESP",
		tireCondition: "Estado de neumáticos",
		safetyRating: "Clasificación de seguridad",
	},
	exterior: {
		color: "Color",
		paintType: "Tipo de pintura",
		wheelSize: "Tamaño de llantas",
		wheelType: "Tipo de llantas",
	},
	interior: {
		materialSeats: "Material de asientos",
		heatedSeats: "Asientos calefaccionados",
		ventilatedSeats: "Asientos ventilados",
	},
	misc: {
		vin: "VIN",
		registrationStatus: "Estado de registro",
		warranty: "Garantía",
		dealerNotes: "Notas del concesionario",
		hidden: "Oculto",
		loanWidget: "Widget de préstamo",
		featured: "Destacado",
	},
};

export const categoryLabels = {
	general: "Información general",
	history: "Historial",
	technical: "Información técnica",
	exterior: "Exterior",
	interior: "Interior",
	options: "Opciones",
	security: "Seguridad",
	efficiency: "Eficiencia",
	misc: "Misceláneo",
};
