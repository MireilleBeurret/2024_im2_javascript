


  let meinEinkommen = prompt ("Wie hoch ist dein monatliches Einkommen?");
  let meinSteuerfuss = prompt ("Wie hoch ist der Steuerfuss in deinem Kanton?");

  let meineSteuern = steuerrechner (meinEinkommen, meinSteuerfuss); 
    console.log ( " Du zahlst pro Jahr " + meineSteuern + " CHF Steuern.");

    //Funktions//

    function steuerrechner (einkommen, steuerfuss) {
        const freigrenze = 11000;
        const steuerprozent = 6;

        let jahreseinkommen = einkommen * 12;
        let steuerbares_einkommen = jahreseinkommen - freigrenze;
        let steuern = steuerbares_einkommen / 100 * steuerprozent;
        let steuerbetrag = steuern / 100 * steuerfuss;
        return steuerbetrag;
      }

    
