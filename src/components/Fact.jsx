
function Fact({label, value}){
    return(
        <div className="mt-3 flex flex-wrap gap-2">
            <dt className="text-sm text-stone-500">{label}</dt>
            <dd className="mt-1 font-medium">{value}</dd>
        </div>
    )
}

export default Fact