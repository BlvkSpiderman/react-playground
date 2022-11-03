import { StockList } from "../components/StockList";
import { AutoComplete } from "../components/AutoComplete";

export const StockOverviewPage = () => {
    return (
        <div className="overviewPage">
            <AutoComplete/>
            <StockList/>
            
        </div>
    );
}