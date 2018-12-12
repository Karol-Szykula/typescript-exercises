interface SearchViewPropsInterface {

    onSearchTextChangeHandler(param: SuperEvent): void
    maxSearchedNumberOfQuestionsInTest: number
    onSearchSliderValueChangeHandler: Function

    searchedNumberOfQuestionsInTest: number
    chosenCategoryFilter: number
    onSearchSelectFieldValueChangeHandler(param: SuperEvent): void
    categoryFilters: Array<String>

}

interface SuperEvent {
    target: {
        value: string
    }
}