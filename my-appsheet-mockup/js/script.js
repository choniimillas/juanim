// Mock Data for the App
const mockActivos = [
    {
        id: 'ACT001',
        item: 'Vehículo',
        identif: 'V-001',
        vehiculo: 'Camioneta',
        patente: 'ABC-123',
        marca: 'Ford',
        modelo: 'Ranger',
        ano: 2020,
        motor: '2.2L Diesel',
        chasis: 'CHASISABC123',
        hidrogua: 'N/A',
        serie: 'SERIE001',
        ano2: 2020,
        aseguradora: 'Sancor Seguros',
        tipo: 'Transporte',
        responsable: 'Juan Perez',
        propiedad: 'Propia',
        vtv: '2025-12-31',
        correa: '2026-06-01',
        bateria: '2024-10-15',
        aceite: '2025-01-20',
        burro: 'OK',
        alternador: 'OK',
        observaciones: 'Buen estado general.',
        estado: 'Operativo',
        proximoService: '2025-07-30',
        consumoEsperado: 10, // km/L
        consumoActual: 9.5,
        otRealizadas: 5
    },
    {
        id: 'ACT002',
        item: 'Maquinaria',
        identif: 'M-001',
        vehiculo: 'Excavadora',
        patente: 'N/A',
        marca: 'Caterpillar',
        modelo: '320D',
        ano: 2018,
        motor: 'C7.1 ACERT',
        chasis: 'CHASISCAT001',
        hidrogua: 'Si',
        serie: 'SERIE002',
        ano2: 2018,
        aseguradora: 'Mapfre',
        tipo: 'Construcción',
        responsable: 'Maria Gomez',
        propiedad: 'Alquilada',
        vtv: 'N/A',
        correa: '2025-09-01',
        bateria: '2025-01-01',
        aceite: '2025-03-10',
        burro: 'OK',
        alternador: 'OK',
        observaciones: 'Requiere revisión de tren de rodaje.',
        estado: 'En Mantenimiento',
        proximoService: '2025-08-15',
        consumoEsperado: 20, // L/hr
        consumoActual: 22.1,
        otRealizadas: 3
    }
];

const mockOTs = [
    {
        id: 'OT001',
        estado: 'Pendiente',
        fechaInicio: '2025-07-01',
        ordenMantenimiento: 'OM-001',
        detalleOT: 'Cambio de aceite y filtros',
        activoEquipo: 'ACT001',
        kmHrs: '50000 km',
        fechaProgramada: '2025-07-10',
        fechaCierre: '',
        imagen: 'https://placehold.co/150x100/A0A0A0/FFFFFF?text=Imagen+OT001',
        usuarioGenerador: 'Admin',
        fechaCreacion: '2025-06-28',
        tipo: 'Preventivo'
    },
    {
        id: 'OT002',
        estado: 'En Proceso',
        fechaInicio: '2025-07-03',
        ordenMantenimiento: 'OM-002',
        detalleOT: 'Reparación de bomba hidráulica',
        activoEquipo: 'ACT002',
        kmHrs: '1200 hrs',
        fechaProgramada: '2025-07-05',
        fechaCierre: '',
        imagen: 'https://placehold.co/150x100/A0A0A0/FFFFFF?text=Imagen+OT002',
        usuarioGenerador: 'Admin',
        fechaCreacion: '2025-07-02',
        tipo: 'Correctivo'
    }
];

const mockTareas = [
    {
        id: 'TAR001',
        fecha: '2025-07-10',
        activoEquipo: 'ACT001',
        ordenMantenimiento: 'OT001',
        estado: 'Pendiente',
        horasTrabajadas: 0,
        comentario: 'Drenar aceite viejo, reemplazar filtro de aceite.',
        imagen: '',
        detalleCompra: 'Filtro de aceite, 5L aceite 10W40',
        tipoDeTrabajo: 'Mecánico',
        responsables: 'Juan Perez',
        usuarioGenerador: 'Admin'
    },
    {
        id: 'TAR002',
        fecha: '2025-07-04',
        activoEquipo: 'ACT002',
        ordenMantenimiento: 'OT002',
        estado: 'Realizada',
        horasTrabajadas: 4,
        comentario: 'Desmontaje de bomba hidráulica.',
        imagen: 'https://placehold.co/150x100/A0A0A0/FFFFFF?text=Imagen+TAR002',
        detalleCompra: 'Herramientas especiales',
        tipoDeTrabajo: 'Hidráulico',
        responsables: 'Maria Gomez',
        usuarioGenerador: 'Admin'
    },
    {
        id: 'TAR003',
        fecha: '2025-07-05',
        activoEquipo: 'ACT002',
        ordenMantenimiento: 'OT002',
        estado: 'En Proceso',
        horasTrabajadas: 2,
        comentario: 'Inspección y reparación de sellos de bomba.',
        imagen: '',
        detalleCompra: 'Kit de sellos',
        tipoDeTrabajo: 'Hidráulico',
        responsables: 'Maria Gomez',
        usuarioGenerador: 'Admin'
    }
];

// Global elements
const appContent = document.getElementById('appContent');
const headerTitle = document.getElementById('headerTitle');
const fabButton = document.getElementById('fabButton');
const navItems = document.querySelectorAll('.appsheet-nav-item');

// Function to render Dashboard View
function renderDashboard() {
    headerTitle.textContent = 'Dashboard';
    fabButton.classList.add('hidden'); // No FAB on dashboard typically
    appContent.innerHTML = `
        <div class="space-y-4">
            <!-- Overview Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="appsheet-card">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">OTs Pendientes</h3>
                    <p class="text-3xl font-bold text-red-600">2</p>
                    <p class="text-sm text-gray-500">Órdenes de Trabajo pendientes</p>
                </div>
                <div class="appsheet-card">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">Activos en Mantenimiento</h3>
                    <p class="text-3xl font-bold text-yellow-600">1</p>
                    <p class="text-sm text-gray-500">Equipos actualmente en reparación</p>
                </div>
                <div class="appsheet-card">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">Próximos Servicios</h3>
                    <p class="text-3xl font-bold text-blue-600">3</p>
                    <p class="text-sm text-gray-500">Mantenimientos preventivos programados</p>
                </div>
            </div>

            <!-- Recent OTs (Deck View style) -->
            <div class="appsheet-card">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Órdenes de Trabajo Recientes</h2>
                <div class="grid grid-cols-1 gap-4">
                    ${mockOTs.map(ot => `
                        <div class="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img src="${ot.imagen || 'https://placehold.co/60x60/E0E0E0/808080?text=OT'}" alt="OT Image" class="w-16 h-16 object-cover rounded-md">
                            </div>
                            <div class="flex-grow">
                                <p class="text-sm font-medium text-gray-600">${ot.fechaInicio} - ${ot.tipo}</p>
                                <h3 class="text-lg font-semibold text-gray-800">${ot.detalleOT}</h3>
                                <p class="text-sm text-gray-500">Activo: ${ot.activoEquipo} | Estado: <span class="font-bold ${ot.estado === 'Pendiente' ? 'text-red-500' : ot.estado === 'En Proceso' ? 'text-yellow-500' : 'text-green-500'}">${ot.estado}</span></p>
                            </div>
                            <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderOTDetail('${ot.id}')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Maintenance Schedule (Table View style) -->
            <div class="appsheet-card">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Próximo Mantenimiento</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Programada</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsable</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${mockOTs.filter(ot => ot.estado === 'Pendiente').map(ot => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${ot.activoEquipo}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ot.tipo}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ot.fechaProgramada}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${mockActivos.find(a => a.id === ot.activoEquipo)?.responsable || 'N/A'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Function to render Activos List (Deck View)
function renderActivosList() {
    headerTitle.textContent = 'Gestión de Activos';
    fabButton.classList.remove('hidden'); // Show FAB for adding new asset
    fabButton.onclick = () => renderActivoForm(); // FAB action
    appContent.innerHTML = `
        <div class="space-y-4">
            ${mockActivos.map(activo => `
                <div class="appsheet-card flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img src="https://placehold.co/80x80/3f51b5/FFFFFF?text=ACT" alt="Asset Icon" class="w-20 h-20 object-cover rounded-lg">
                    </div>
                    <div class="flex-grow">
                        <h3 class="text-lg font-semibold text-gray-800">${activo.item} - ${activo.identif}</h3>
                        <p class="text-sm text-gray-600">${activo.marca} ${activo.modelo} (${activo.ano})</p>
                        <p class="text-sm text-gray-500">Patente: ${activo.patente || 'N/A'} | Responsable: ${activo.responsable}</p>
                        <p class="text-sm text-gray-500">Estado: <span class="font-bold ${activo.estado === 'Operativo' ? 'text-green-500' : 'text-yellow-500'}">${activo.estado}</span></p>
                    </div>
                    <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderActivoDetail('${activo.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

// Function to render Activo Detail View
function renderActivoDetail(id) {
    const activo = mockActivos.find(a => a.id === id);
    if (!activo) {
        appContent.innerHTML = '<p class="text-center text-red-500">Activo no encontrado.</p>';
        return;
    }
    headerTitle.textContent = activo.item + ' - ' + activo.identif;
    fabButton.classList.add('hidden'); // Hide FAB on detail view
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <div class="flex justify-center mb-4">
                <img src="https://placehold.co/150x150/3f51b5/FFFFFF?text=ACT" alt="Asset Icon" class="w-32 h-32 object-cover rounded-full border-4 border-blue-200">
            </div>
            <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">${activo.item} - ${activo.identif}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-sm text-gray-500">Vehículo</p>
                    <p class="text-base font-medium text-gray-800">${activo.vehiculo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Patente</p>
                    <p class="text-base font-medium text-gray-800">${activo.patente || 'N/A'}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Marca</p>
                    <p class="text-base font-medium text-gray-800">${activo.marca}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Modelo</p>
                    <p class="text-base font-medium text-gray-800">${activo.modelo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Año</p>
                    <p class="text-base font-medium text-gray-800">${activo.ano}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Motor</p>
                    <p class="text-base font-medium text-gray-800">${activo.motor}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Chasis</p>
                    <p class="text-base font-medium text-gray-800">${activo.chasis}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Tipo</p>
                    <p class="text-base font-medium text-gray-800">${activo.tipo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Responsable</p>
                    <p class="text-base font-medium text-gray-800">${activo.responsable}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Estado</p>
                    <p class="text-base font-medium text-gray-800 ${activo.estado === 'Operativo' ? 'text-green-600' : 'text-yellow-600'}">${activo.estado}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Próximo Service</p>
                    <p class="text-base font-medium text-gray-800">${activo.proximoService}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Observaciones</p>
                    <p class="text-base font-medium text-gray-800">${activo.observaciones || 'N/A'}</p>
                </div>
            </div>

            <div class="flex justify-end space-x-2 mt-6">
                <button class="appsheet-button appsheet-button-secondary" onclick="renderActivoForm('${activo.id}')">
                    Editar
                </button>
                <button class="appsheet-button appsheet-button-primary">
                    Nueva OT
                </button>
            </div>

            <!-- Related OTs (Mini-Deck/Table) -->
            <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Órdenes de Trabajo Relacionadas</h3>
            <div class="space-y-3">
                ${mockOTs.filter(ot => ot.activoEquipo === activo.id).map(ot => `
                    <div class="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-md font-semibold text-gray-800">${ot.detalleOT}</p>
                            <p class="text-sm text-gray-600">Fecha: ${ot.fechaInicio} | Estado: <span class="font-bold ${ot.estado === 'Pendiente' ? 'text-red-500' : ot.estado === 'En Proceso' ? 'text-yellow-500' : 'text-green-500'}">${ot.estado}</span></p>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderOTDetail('${ot.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to render Activo Form View (Add/Edit)
function renderActivoForm(id = null) {
    const isEdit = id !== null;
    const activo = isEdit ? mockActivos.find(a => a.id === id) : {};
    headerTitle.textContent = isEdit ? 'Editar Activo' : 'Nuevo Activo';
    fabButton.classList.add('hidden'); // Hide FAB on form view
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">${isEdit ? 'Editar Datos del Activo' : 'Cargar Nuevo Activo'}</h2>
            <form id="activoForm" class="space-y-4">
                <div>
                    <label for="item" class="block text-sm font-medium text-gray-700">Item (Text)</label>
                    <input type="text" id="item" value="${activo.item || ''}" class="appsheet-input" placeholder="Ej: Vehículo, Maquinaria" required>
                </div>
                <div>
                    <label for="identif" class="block text-sm font-medium text-gray-700">Identif (Text)</label>
                    <input type="text" id="identif" value="${activo.identif || ''}" class="appsheet-input" placeholder="Ej: V-001, M-001" required>
                </div>
                <div>
                    <label for="vehiculo" class="block text-sm font-medium text-gray-700">Vehículo (Text)</label>
                    <input type="text" id="vehiculo" value="${activo.vehiculo || ''}" class="appsheet-input" placeholder="Ej: Camioneta, Excavadora">
                </div>
                <div>
                    <label for="patente" class="block text-sm font-medium text-gray-700">Patente (Text)</label>
                    <input type="text" id="patente" value="${activo.patente || ''}" class="appsheet-input" placeholder="Ej: ABC-123">
                </div>
                <div>
                    <label for="marca" class="block text-sm font-medium text-gray-700">Marca (Text)</label>
                    <input type="text" id="marca" value="${activo.marca || ''}" class="appsheet-input" placeholder="Ej: Ford, Caterpillar">
                </div>
                <div>
                    <label for="modelo" class="block text-sm font-medium text-gray-700">Modelo (Text)</label>
                    <input type="text" id="modelo" value="${activo.modelo || ''}" class="appsheet-input" placeholder="Ej: Ranger, 320D">
                </div>
                <div>
                    <label for="ano" class="block text-sm font-medium text-gray-700">Año (Number)</label>
                    <input type="number" id="ano" value="${activo.ano || ''}" class="appsheet-input" placeholder="Ej: 2020">
                </div>
                <div>
                    <label for="motor" class="block text-sm font-medium text-gray-700">Motor (Text)</label>
                    <input type="text" id="motor" value="${activo.motor || ''}" class="appsheet-input" placeholder="Ej: 2.2L Diesel">
                </div>
                <div>
                    <label for="chasis" class="block text-sm font-medium text-gray-700">Chasis (Text)</label>
                    <input type="text" id="chasis" value="${activo.chasis || ''}" class="appsheet-input" placeholder="Ej: CHASISABC123">
                </div>
                <div>
                    <label for="hidrogua" class="block text-sm font-medium text-gray-700">Hidrogua (Yes/No)</label>
                    <select id="hidrogua" class="appsheet-input">
                        <option value="Si" ${activo.hidrogua === 'Si' ? 'selected' : ''}>Si</option>
                        <option value="No" ${activo.hidrogua === 'No' ? 'selected' : ''}>No</option>
                        <option value="N/A" ${activo.hidrogua === 'N/A' ? 'selected' : ''}>N/A</option>
                    </select>
                </div>
                <div>
                    <label for="serie" class="block text-sm font-medium text-gray-700">Serie (Text)</label>
                    <input type="text" id="serie" value="${activo.serie || ''}" class="appsheet-input" placeholder="Ej: SERIE001">
                </div>
                <div>
                    <label for="ano2" class="block text-sm font-medium text-gray-700">Año2 (Number)</label>
                    <input type="number" id="ano2" value="${activo.ano2 || ''}" class="appsheet-input" placeholder="Ej: 2020">
                </div>
                <div>
                    <label for="aseguradora" class="block text-sm font-medium text-gray-700">Aseguradora (Text)</label>
                    <input type="text" id="aseguradora" value="${activo.aseguradora || ''}" class="appsheet-input" placeholder="Ej: Sancor Seguros">
                </div>
                <div>
                    <label for="tipo" class="block text-sm font-medium text-gray-700">Tipo (Enum)</label>
                    <select id="tipo" class="appsheet-input">
                        <option value="Transporte" ${activo.tipo === 'Transporte' ? 'selected' : ''}>Transporte</option>
                        <option value="Construcción" ${activo.tipo === 'Construcción' ? 'selected' : ''}>Construcción</option>
                        <option value="Oficina" ${activo.tipo === 'Oficina' ? 'selected' : ''}>Oficina</option>
                    </select>
                </div>
                <div>
                    <label for="responsable" class="block text-sm font-medium text-gray-700">Responsable (Text)</label>
                    <input type="text" id="responsable" value="${activo.responsable || ''}" class="appsheet-input" placeholder="Ej: Juan Perez">
                </div>
                <div>
                    <label for="propiedad" class="block text-sm font-medium text-gray-700">Propiedad (Enum)</label>
                    <select id="propiedad" class="appsheet-input">
                        <option value="Propia" ${activo.propiedad === 'Propia' ? 'selected' : ''}>Propia</option>
                        <option value="Alquilada" ${activo.propiedad === 'Alquilada' ? 'selected' : ''}>Alquilada</option>
                    </select>
                </div>
                <div>
                    <label for="vtv" class="block text-sm font-medium text-gray-700">VTV (Date)</label>
                    <input type="date" id="vtv" value="${activo.vtv || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="correa" class="block text-sm font-medium text-gray-700">Correa (Date)</label>
                    <input type="date" id="correa" value="${activo.correa || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="bateria" class="block text-sm font-medium text-gray-700">Batería (Date)</label>
                    <input type="date" id="bateria" value="${activo.bateria || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="aceite" class="block text-sm font-medium text-gray-700">Aceite (Date)</label>
                    <input type="date" id="aceite" value="${activo.aceite || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="burro" class="block text-sm font-medium text-gray-700">Burro (Text)</label>
                    <input type="text" id="burro" value="${activo.burro || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="alternador" class="block text-sm font-medium text-gray-700">Alternador (Text)</label>
                    <input type="text" id="alternador" value="${activo.alternador || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="observaciones" class="block text-sm font-medium text-gray-700">Observaciones (LongText)</label>
                    <textarea id="observaciones" class="appsheet-input h-24 resize-y" placeholder="Cualquier observación adicional">${activo.observaciones || ''}</textarea>
                </div>
                <div>
                    <label for="estado" class="block text-sm font-medium text-gray-700">Estado (Enum)</label>
                    <select id="estado" class="appsheet-input">
                        <option value="Operativo" ${activo.estado === 'Operativo' ? 'selected' : ''}>Operativo</option>
                        <option value="En Mantenimiento" ${activo.estado === 'En Mantenimiento' ? 'selected' : ''}>En Mantenimiento</option>
                        <option value="Fuera de Servicio" ${activo.estado === 'Fuera de Servicio' ? 'selected' : ''}>Fuera de Servicio</option>
                    </select>
                </div>
                <div>
                    <label for="proximoService" class="block text-sm font-medium text-gray-700">Próximo Service (Date)</label>
                    <input type="date" id="proximoService" value="${activo.proximoService || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="consumoEsperado" class="block text-sm font-medium text-gray-700">Consumo Esperado (Number)</label>
                    <input type="number" id="consumoEsperado" value="${activo.consumoEsperado || ''}" class="appsheet-input" step="0.1">
                </div>
                <div>
                    <label for="consumoActual" class="block text-sm font-medium text-gray-700">Consumo Actual (Number)</label>
                    <input type="number" id="consumoActual" value="${activo.consumoActual || ''}" class="appsheet-input" step="0.1" disabled>
                    <p class="text-xs text-gray-500 mt-1">Calculado automáticamente.</p>
                </div>
                <div>
                    <label for="otRealizadas" class="block text-sm font-medium text-gray-700">OT Realizadas (Number)</label>
                    <input type="number" id="otRealizadas" value="${activo.otRealizadas || ''}" class="appsheet-input" disabled>
                    <p class="text-xs text-gray-500 mt-1">Número de OTs realizadas en este equipo.</p>
                </div>

                <div class="flex justify-end space-x-2 mt-6">
                    <button type="button" class="appsheet-button appsheet-button-secondary" onclick="renderActivosList()">
                        Cancelar
                    </button>
                    <button type="submit" class="appsheet-button appsheet-button-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    `;

    document.getElementById('activoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real AppSheet app, this would trigger data sync.
        // Here, we just navigate back to the list.
        console.log('Activo guardado/actualizado (simulado).');
        renderActivosList();
    });
}

// Function to render OTs List (Table View)
function renderOTsList() {
    headerTitle.textContent = 'Gestión de OTs';
    fabButton.classList.remove('hidden'); // Show FAB for adding new OT
    fabButton.onclick = () => renderOTForm(); // FAB action
    appContent.innerHTML = `
        <div class="appsheet-card">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Órdenes de Trabajo</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OT ID</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalle</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Prog.</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${mockOTs.map(ot => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${ot.id}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ot.detalleOT}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ot.activoEquipo}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-bold ${ot.estado === 'Pendiente' ? 'text-red-500' : ot.estado === 'En Proceso' ? 'text-yellow-500' : 'text-green-500'}">${ot.estado}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ot.fechaProgramada}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderOTDetail('${ot.id}')">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 inline-block">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Function to render OT Detail View
function renderOTDetail(id) {
    const ot = mockOTs.find(o => o.id === id);
    if (!ot) {
        appContent.innerHTML = '<p class="text-center text-red-500">OT no encontrada.</p>';
        return;
    }
    headerTitle.textContent = 'OT: ' + ot.id;
    fabButton.classList.add('hidden');
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">${ot.detalleOT}</h2>
            <div class="flex justify-center mb-4">
                <img src="${ot.imagen || 'https://placehold.co/200x150/A0A0A0/FFFFFF?text=OT+Detail'}" alt="OT Image" class="w-48 h-auto object-cover rounded-lg shadow-md">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-sm text-gray-500">Estado</p>
                    <p class="text-base font-medium text-gray-800 ${ot.estado === 'Pendiente' ? 'text-red-600' : ot.estado === 'En Proceso' ? 'text-yellow-600' : 'text-green-600'}">${ot.estado}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Tipo</p>
                    <p class="text-base font-medium text-gray-800">${ot.tipo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Activo/Equipo</p>
                    <p class="text-base font-medium text-gray-800">${ot.activoEquipo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Fecha Inicio</p>
                    <p class="text-base font-medium text-gray-800">${ot.fechaInicio}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Fecha Programada</p>
                    <p class="text-base font-medium text-gray-800">${ot.fechaProgramada}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Fecha Cierre</p>
                    <p class="text-base font-medium text-gray-800">${ot.fechaCierre || 'Pendiente'}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Km/Hrs</p>
                    <p class="text-base font-medium text-gray-800">${ot.kmHrs}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Usuario Generador</p>
                    <p class="text-base font-medium text-gray-800">${ot.usuarioGenerador}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Fecha de Creación</p>
                    <p class="text-base font-medium text-gray-800">${ot.fechaCreacion}</p>
                </div>
            </div>

            <div class="flex justify-end space-x-2 mt-6">
                <button class="appsheet-button appsheet-button-secondary" onclick="renderOTForm('${ot.id}')">
                    Editar OT
                </button>
                <button class="appsheet-button appsheet-button-primary">
                    Ver Tareas
                </button>
            </div>

            <!-- Related Tareas (Mini-Deck/Table) -->
            <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Tareas Asociadas</h3>
            <div class="space-y-3">
                ${mockTareas.filter(tarea => tarea.ordenMantenimiento === ot.id).map(tarea => `
                    <div class="bg-gray-50 p-3 rounded-lg shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-md font-semibold text-gray-800">${tarea.comentario}</p>
                            <p class="text-sm text-gray-600">Fecha: ${tarea.fecha} | Estado: <span class="font-bold ${tarea.estado === 'Pendiente' ? 'text-red-500' : tarea.estado === 'En Proceso' ? 'text-yellow-500' : 'text-green-500'}">${tarea.estado}</span></p>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderTareaDetail('${tarea.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to render OT Form View (Add/Edit)
function renderOTForm(id = null) {
    const isEdit = id !== null;
    const ot = isEdit ? mockOTs.find(o => o.id === id) : {};
    headerTitle.textContent = isEdit ? 'Editar OT' : 'Nueva OT';
    fabButton.classList.add('hidden');
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">${isEdit ? 'Editar Orden de Trabajo' : 'Crear Nueva Orden de Trabajo'}</h2>
            <form id="otForm" class="space-y-4">
                ${isEdit ? `
                    <div>
                        <label for="otId" class="block text-sm font-medium text-gray-700">OT ID (Text)</label>
                        <input type="text" id="otId" value="${ot.id || ''}" class="appsheet-input bg-gray-100" disabled>
                    </div>
                ` : ''}
                <div>
                    <label for="otEstado" class="block text-sm font-medium text-gray-700">Estado (Enum)</label>
                    <select id="otEstado" class="appsheet-input">
                        <option value="Pendiente" ${ot.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                        <option value="En Proceso" ${ot.estado === 'En Proceso' ? 'selected' : ''}>En Proceso</option>
                        <option value="Realizada" ${ot.estado === 'Realizada' ? 'selected' : ''}>Realizada</option>
                        <option value="Cancelada" ${ot.estado === 'Cancelada' ? 'selected' : ''}>Cancelada</option>
                    </select>
                </div>
                <div>
                    <label for="otFechaInicio" class="block text-sm font-medium text-gray-700">Fecha Inicio (Date)</label>
                    <input type="date" id="otFechaInicio" value="${ot.fechaInicio || ''}" class="appsheet-input" required>
                </div>
                <div>
                    <label for="otOrdenMantenimiento" class="block text-sm font-medium text-gray-700">Orden Mantenimiento (Text)</label>
                    <input type="text" id="otOrdenMantenimiento" value="${ot.ordenMantenimiento || ''}" class="appsheet-input" placeholder="Ej: OM-001">
                </div>
                <div>
                    <label for="otDetalle" class="block text-sm font-medium text-gray-700">Detalle OT (LongText)</label>
                    <textarea id="otDetalle" class="appsheet-input h-24 resize-y" placeholder="Descripción detallada de la OT" required>${ot.detalleOT || ''}</textarea>
                </div>
                <div>
                    <label for="otActivoEquipo" class="block text-sm font-medium text-gray-700">Activo / Equipo (Ref)</label>
                    <select id="otActivoEquipo" class="appsheet-input" required>
                        <option value="">Seleccione un Activo</option>
                        ${mockActivos.map(a => `<option value="${a.id}" ${ot.activoEquipo === a.id ? 'selected' : ''}>${a.item} - ${a.identif}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="otKmHrs" class="block text-sm font-medium text-gray-700">Km/Hrs (Text)</label>
                    <input type="text" id="otKmHrs" value="${ot.kmHrs || ''}" class="appsheet-input" placeholder="Ej: 50000 km, 1200 hrs">
                </div>
                <div>
                    <label for="otFechaProgramada" class="block text-sm font-medium text-gray-700">Fecha Programada (Date)</label>
                    <input type="date" id="otFechaProgramada" value="${ot.fechaProgramada || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="otFechaCierre" class="block text-sm font-medium text-gray-700">Fecha Cierre (Date)</label>
                    <input type="date" id="otFechaCierre" value="${ot.fechaCierre || ''}" class="appsheet-input">
                </div>
                <div>
                    <label for="otImagen" class="block text-sm font-medium text-gray-700">Imagen (Image)</label>
                    <input type="file" id="otImagen" class="appsheet-input p-2">
                    ${ot.imagen ? `<img src="${ot.imagen}" alt="Current OT Image" class="mt-2 w-32 h-auto rounded-md shadow-sm">` : ''}
                </div>
                <div>
                    <label for="otUsuarioGenerador" class="block text-sm font-medium text-gray-700">Usuario Generador (Text)</label>
                    <input type="text" id="otUsuarioGenerador" value="${ot.usuarioGenerador || 'Admin'}" class="appsheet-input" disabled>
                </div>
                <div>
                    <label for="otFechaCreacion" class="block text-sm font-medium text-gray-700">Fecha de Creación (Date)</label>
                    <input type="date" id="otFechaCreacion" value="${ot.fechaCreacion || new Date().toISOString().split('T')[0]}" class="appsheet-input" disabled>
                </div>
                <div>
                    <label for="otTipo" class="block text-sm font-medium text-gray-700">Tipo (Enum)</label>
                    <select id="otTipo" class="appsheet-input">
                        <option value="Correctivo" ${ot.tipo === 'Correctivo' ? 'selected' : ''}>Correctivo</option>
                        <option value="Preventivo" ${ot.tipo === 'Preventivo' ? 'selected' : ''}>Preventivo</option>
                    </select>
                </div>

                <div class="flex justify-end space-x-2 mt-6">
                    <button type="button" class="appsheet-button appsheet-button-secondary" onclick="renderOTsList()">
                        Cancelar
                    </button>
                    <button type="submit" class="appsheet-button appsheet-button-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('otForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('OT guardada/actualizada (simulado).');
        renderOTsList();
    });
}

// Function to render Tareas List (Table View)
function renderTareasList() {
    headerTitle.textContent = 'Gestión de Tareas';
    fabButton.classList.remove('hidden'); // Show FAB for adding new task
    fabButton.onclick = () => renderTareaForm(); // FAB action
    appContent.innerHTML = `
        <div class="appsheet-card">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Tareas de OT</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarea ID</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comentario</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OT</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsable</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${mockTareas.map(tarea => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${tarea.id}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${tarea.comentario}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${tarea.ordenMantenimiento}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-bold ${tarea.estado === 'Pendiente' ? 'text-red-500' : tarea.estado === 'En Proceso' ? 'text-yellow-500' : 'text-green-500'}">${tarea.estado}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${tarea.responsables}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button class="text-blue-600 hover:text-blue-800 focus:outline-none" onclick="renderTareaDetail('${tarea.id}')">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 inline-block">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Function to render Tarea Detail View
function renderTareaDetail(id) {
    const tarea = mockTareas.find(t => t.id === id);
    if (!tarea) {
        appContent.innerHTML = '<p class="text-center text-red-500">Tarea no encontrada.</p>';
        return;
    }
    headerTitle.textContent = 'Tarea: ' + tarea.id;
    fabButton.classList.add('hidden');
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Tarea: ${tarea.comentario}</h2>
            <div class="flex justify-center mb-4">
                ${tarea.imagen ? `<img src="${tarea.imagen}" alt="Tarea Image" class="w-48 h-auto object-cover rounded-lg shadow-md">` : `<div class="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">No Image</div>`}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-sm text-gray-500">Fecha</p>
                    <p class="text-base font-medium text-gray-800">${tarea.fecha}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Activo/Equipo</p>
                    <p class="text-base font-medium text-gray-800">${tarea.activoEquipo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Orden Mantenimiento</p>
                    <p class="text-base font-medium text-gray-800">${tarea.ordenMantenimiento}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Estado</p>
                    <p class="text-base font-medium text-gray-800 ${tarea.estado === 'Pendiente' ? 'text-red-600' : tarea.estado === 'En Proceso' ? 'text-yellow-600' : 'text-green-600'}">${tarea.estado}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Horas Trabajadas</p>
                    <p class="text-base font-medium text-gray-800">${tarea.horasTrabajadas} hrs</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Detalle Compra</p>
                    <p class="text-base font-medium text-gray-800">${tarea.detalleCompra || 'N/A'}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Tipo de Trabajo</p>
                    <p class="text-base font-medium text-gray-800">${tarea.tipoDeTrabajo}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Responsables</p>
                    <p class="text-base font-medium text-gray-800">${tarea.responsables}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Usuario Generador</p>
                    <p class="text-base font-medium text-gray-800">${tarea.usuarioGenerador}</p>
                </div>
            </div>

            <div class="flex justify-end space-x-2 mt-6">
                <button class="appsheet-button appsheet-button-secondary" onclick="renderTareaForm('${tarea.id}')">
                    Editar Tarea
                </button>
                <button class="appsheet-button appsheet-button-primary">
                    Marcar como Realizada
                </button>
            </div>
        </div>
    `;
}

// Function to render Tarea Form View (Add/Edit)
function renderTareaForm(id = null) {
    const isEdit = id !== null;
    const tarea = isEdit ? mockTareas.find(t => t.id === id) : {};
    headerTitle.textContent = isEdit ? 'Editar Tarea' : 'Nueva Tarea';
    fabButton.classList.add('hidden');
    appContent.innerHTML = `
        <div class="appsheet-card space-y-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">${isEdit ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h2>
            <form id="tareaForm" class="space-y-4">
                ${isEdit ? `
                    <div>
                        <label for="tareaId" class="block text-sm font-medium text-gray-700">Tarea ID (Text)</label>
                        <input type="text" id="tareaId" value="${tarea.id || ''}" class="appsheet-input bg-gray-100" disabled>
                    </div>
                ` : ''}
                <div>
                    <label for="tareaFecha" class="block text-sm font-medium text-gray-700">Fecha (Date)</label>
                    <input type="date" id="tareaFecha" value="${tarea.fecha || new Date().toISOString().split('T')[0]}" class="appsheet-input" required>
                </div>
                <div>
                    <label for="tareaActivoEquipo" class="block text-sm font-medium text-gray-700">Activo / Equipo (Ref)</label>
                    <select id="tareaActivoEquipo" class="appsheet-input" required>
                        <option value="">Seleccione un Activo</option>
                        ${mockActivos.map(a => `<option value="${a.id}" ${tarea.activoEquipo === a.id ? 'selected' : ''}>${a.item} - ${a.identif}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="tareaOrdenMantenimiento" class="block text-sm font-medium text-gray-700">Orden Mantenimiento (Ref)</label>
                    <select id="tareaOrdenMantenimiento" class="appsheet-input" required>
                        <option value="">Seleccione una OT</option>
                        ${mockOTs.map(o => `<option value="${o.id}" ${tarea.ordenMantenimiento === o.id ? 'selected' : ''}>${o.id} - ${o.detalleOT}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="tareaEstado" class="block text-sm font-medium text-gray-700">Estado (Enum)</label>
                    <select id="tareaEstado" class="appsheet-input">
                        <option value="Pendiente" ${tarea.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                        <option value="En Proceso" ${tarea.estado === 'En Proceso' ? 'selected' : ''}>En Proceso</option>
                        <option value="Realizada" ${tarea.estado === 'Realizada' ? 'selected' : ''}>Realizada</option>
                        <option value="Cancelada" ${tarea.estado === 'Cancelada' ? 'selected' : ''}>Cancelada</option>
                    </select>
                </div>
                <div>
                    <label for="tareaHorasTrabajadas" class="block text-sm font-medium text-gray-700">Horas Trabajadas (Number)</label>
                    <input type="number" id="tareaHorasTrabajadas" value="${tarea.horasTrabajadas || 0}" class="appsheet-input" step="0.5">
                </div>
                <div>
                    <label for="tareaComentario" class="block text-sm font-medium text-gray-700">Comentario (LongText)</label>
                    <textarea id="tareaComentario" class="appsheet-input h-24 resize-y" placeholder="Descripción de la tarea" required>${tarea.comentario || ''}</textarea>
                </div>
                <div>
                    <label for="tareaImagen" class="block text-sm font-medium text-gray-700">Imagen (Image)</label>
                    <input type="file" id="tareaImagen" class="appsheet-input p-2">
                    ${tarea.imagen ? `<img src="${tarea.imagen}" alt="Current Tarea Image" class="mt-2 w-32 h-auto rounded-md shadow-sm">` : ''}
                </div>
                <div>
                    <label for="tareaDetalleCompra" class="block text-sm font-medium text-gray-700">Detalle Compra (Text)</label>
                    <input type="text" id="tareaDetalleCompra" value="${tarea.detalleCompra || ''}" class="appsheet-input" placeholder="Ej: Repuestos, Herramientas">
                </div>
                <div>
                    <label for="tareaTipoDeTrabajo" class="block text-sm font-medium text-gray-700">Tipo de Trabajo (Enum)</label>
                    <select id="tareaTipoDeTrabajo" class="appsheet-input">
                        <option value="Mecánico" ${tarea.tipoDeTrabajo === 'Mecánico' ? 'selected' : ''}>Mecánico</option>
                        <option value="Eléctrico" ${tarea.tipoDeTrabajo === 'Eléctrico' ? 'selected' : ''}>Eléctrico</option>
                        <option value="Hidráulico" ${tarea.tipoDeTrabajo === 'Hidráulico' ? 'selected' : ''}>Hidráulico</option>
                        <option value="General" ${tarea.tipoDeTrabajo === 'General' ? 'selected' : ''}>General</option>
                    </select>
                </div>
                <div>
                    <label for="tareaResponsables" class="block text-sm font-medium text-gray-700">Responsables (Text)</label>
                    <input type="text" id="tareaResponsables" value="${tarea.responsables || ''}" class="appsheet-input" placeholder="Ej: Juan Perez, Maria Gomez">
                </div>
                <div>
                    <label for="tareaUsuarioGenerador" class="block text-sm font-medium text-gray-700">Usuario Generador (Text)</label>
                    <input type="text" id="tareaUsuarioGenerador" value="${tarea.usuarioGenerador || 'Admin'}" class="appsheet-input" disabled>
                </div>

                <div class="flex justify-end space-x-2 mt-6">
                    <button type="button" class="appsheet-button appsheet-button-secondary" onclick="renderTareasList()">
                        Cancelar
                    </button>
                    <button type="submit" class="appsheet-button appsheet-button-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('tareaForm').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Tarea guardada/actualizada (simulado).');
        renderTareasList();
    });
}


// Navigation logic
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(nav => nav.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const view = e.currentTarget.id.replace('nav', '');
        switch (view) {
            case 'Dashboard':
                renderDashboard();
                break;
            case 'Activos':
                renderActivosList();
                break;
            case 'OTs':
                renderOTsList();
                break;
            case 'Tareas':
                renderTareasList();
                break;
            default:
                renderDashboard();
        }
    });
});

// Initial render
document.addEventListener('DOMContentLoaded', renderDashboard);

// Simple menu toggle (for demonstration, not full sidebar functionality)
document.getElementById('menuButton').addEventListener('click', () => {
    console.log('Menú lateral (sidebar) simulado. En AppSheet, esto abriría un menú de navegación o configuración.');
});

document.getElementById('syncButton').addEventListener('click', () => {
    console.log('Sincronización de datos simulada. En AppSheet, esto forzaría una sincronización con la fuente de datos.');
});
