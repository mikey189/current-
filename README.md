B"H 

TO DO:  

Thursday 01/09

Channel List
  Re-arrange :
    <channel-list>
    <ui-view> -> tableau dynamique avec conditional rows (if cdRom then ng-show specific rows)
  
Dashboard:
  - top fresque
  - change icons + main sidebar icons
  - delete 4th row dans file waiting
  - put conditional filter
  - vertical divider (<md-divider vertical>) dans tab 1 et tab 5
  - increase width of tab 5 (==width tab 1)

Policy: 
  Dashboard:
    - put conditional filter on top data switcher
    - put conditional filter on the sidebar
    - make sidebar circle actually rounded! 
  
  What is this Policy? :
    Re-arrange general structure: 
    <custom-top-nav>
    <ui-view>
      if FileType{
        ui-view = <search-bar> --> à refaire
                  <tableau> --> (refaire entierement le tableau)
      }
      else if detection {
        ui-view = tableau avec checkbox, refaire colors, icons, dropDown rows
      }
      
      
