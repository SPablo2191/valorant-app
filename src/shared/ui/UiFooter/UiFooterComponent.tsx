export function UiFooter() {
    return (
        <div className="bg-slate-900 shadow-2xl bottom-0 left-0 w-full fixed text-center text-white py-4">
            <p>&copy; {new Date().getFullYear()} <span><a href="https://www.linkedin.com/in/pablo-sandoval-838553216/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Sandoval Pablo</a></span>. Todos los derechos reservados.</p>
        </div>
    );
}
