export function CombineContext(...providers){
    return ({children}) => {
        return providers.reduceRight((accumulator , Currentprovider) => {
            return <Currentprovider>{accumulator}</Currentprovider>
        } , children);
    }
}