import React from "react";
import BasicNav from "./BasicNav";

function Remodel(props) {
  const beforeImages = [
    {
      url:
        "https://lh3.googleusercontent.com/kTO9al1DUskeEv_6C3ygsTer2cEu5MdoO2yP_qHsDFx92GIYBW-oBI-TDFMd80yEyMSrz-pvt3xnZ_TFKF1qYEN-EYX3eX1FsskeuuMNJ-kuQ3tev4aU99g9xIFlH_0BHIpXuKZ2J_nuG8wAN4Pv_IOqmQr_QCih8c_tYZxxGujacfXxueIDsSCKN8HiFZ7XH0MCPkmu1QYvIxwZi0tgzoLGPMMWZd1QLEF1mOX_nFwa1voQ1Oe3BkbnnK47d3ryyuOX3HmokfXRgpy_qkdQ6LRpnnh53GCh4mG3zGUBI59s6eq81npDPSLXfHvd3kuUrQgux0IXnVzt35umdD2pBy000OV9sAQTfP3nhFtCLQ6xfrxfRU5zSBw5KjKV8hPu-cQx-lB_L9wcTAki05YeGx1lfnuVqL039OkHCS6DOg5j7csHgn9R7LtzrRcvqBX0qbEExvCYTFUoMqP4b_2yI9ymVI8z6_FZxX1MHSp0ijCcxw1hpl1-bRfFNieRclkTkyKOfEB8hUbr0pE7FZm6ftli_-uMKDZzo1UZ5zBNQKdUJGgV0IBFdK3poElI4GxZR0f9rN7aPR9Wky6vSAxZR2-pa0gXxuvEm-6ogCK--BAnjItYmGtl5jFMADWCnAw_bzAWRQeYCs2JpiY7hyHNPbTa3qhCszo=w750-h545-no",
      id: 1
    },
    {
      url:
        "https://lh3.googleusercontent.com/U8WYzLw2j3ynVNqVa1ov7lH6J65tYVU4eEHBlxjBQdpnNMj9uoG7K4adRo8T4cKQbamKwt1odbo6xGCKAmY32_Rflq9O-8pmIjwRqkxhmcNbar3k128dt_-4P5ssmM6Mc1ovMaYMKQHcz0GHrb-SerrzqkrXDPEDMCDL_disKeLGtd-YSLC_mcW0YeAeakdcTW5a3XvOEuh0p1-2QcBvZu6VacrNBkedSQehS8jw97GS5aeEwVKHWY3Xz1BNfKO48kK_ndzUEJO9op5deB2ByBrHUOPECjB19zmlOj2zm3Bn7eGClkl6Pm_dPaRpKIXJe1_-FChPdSj3pVjt7X2o1TjLvUhvPG6XYUdNJVcVOZFE8Jhvi6-gEpDuGkcv_v8orESfXRo6sW-ZoULNvcpoyfwjQg4vR2xL5fqyg3MOAoShHLAMddyXNUapG2krFxDfzy-nfnM6W8KnQ8AqSR88L9PtU2Icv1z4WEbpPgtdsROAJINqB07UbytOWhVo-6myQ-tMRWwmT9I2gvStiMr6AKe83jOLs7S5UqHkWA8ZJ31spa2h2Y4PGEEPwuizrZaf7xazk-TxJUpUglhtO4uIp1PdKQyUUw2re2LpTYbecdWOMbTKWTzSwnBBM1sk9rFBGga9XpMi9DjDBq-_1HGBXjzsfBwwkKA=w750-h551-no",
      id: 2
    },
    {
      url:
        "https://lh3.googleusercontent.com/w7n7MVau312xiJl2gx348Ui6eCBz-CYWQElSD43jshDtn8Qv9WXksRWRBb26mzASG_yreYAWg-HWOcozUU_gxRvlnDJodoqkB_-WPK9trJ-AqIkWtXYgN7DPqwvafeYCNB5JSzRRZsE9C8D8bJSSiUXzTWcMUXrf02JFVRpjpbZ6LChqtwOlHGKpRag9rJjUerxyn_AzKzGObHWUm4qZxA8P9OOvutJ9eW7GdDDva7KV3JlA5fVoogyk5T4Rkkim32tKTt_KPQv7dpoV9AQAnE1sFWhmntWaXGH_O7jjhKFKT4Ig2LqzFzMC1a3jScSoqY6RgXQ9uka68BygdKbvtW2kV-hKG_S8_9uAFkXOOhFb_vp-t1Ah4GloVQWoWLU7Cob27ETryfT9cYkEE0Atkg-IsdhsSNaZFqa-jnrX9jfNfRXmA44x3UrQl4y5DBKWkxhsr4J-XvolFskJ3alZLoiAkHp6L-qdP-nJfLbW7yuSojltcERTBhg7MuYjuQXU4vns0EX8kdE4B9REwnWetSBxurusX5gPbBlR82RNb0poWGuSBCe9JXQY3XDFTMO2ovV-eHMyStxBUHZxFYIx2weJVq_rri5Bi1Pd8ARrIJg6zmxSXUuaL7IngDs_UFRBzrLoWeBbTJmeVtFKlMALm6o9VsVCFjU=w750-h556-no",
      id: 3
    },
    {
      url:
        "https://lh3.googleusercontent.com/0Q0qXcq4UVBame713G5GbvJH67u1Akhwqw2YdSiDSZpJMwhvDYB35zsayfWlvGK_p7SITyOyMhaQm_01aRhcmX0uhqtL7s3dTJz4wFBJiIBtWdyonthS2MBBIKkW1g7HeBs8Oo69YXTwSXAyfff1RwXboExQxSNtbqE9Dup9UcpJSSyG8PQw47GOV3CvAtZVuVf0fvpRgTWBdsm_SMVOSqIJNg6vn1aqjhxkG0SEFNyese5oApMRx9JyPNAmDuOfUCANM1IgP8ovK9s69w8qIEWYIOwHp4nosAsTdfdcSWbmAU1aN9yrW4AFkhLPn8auQFsgZiWHJf1scZgHO0DmuWEcnNSsvVU84ZCElnLVWALpdVkc8KXgfjr8QBe4h6-FnxgcfZnZ3z1wV-5yzLLw9TyuA2800mwxoBZmrjWjA_6sJ8NiiL1iuVgGvLK6-1YyzcRj8niFaCud7KHY3mLFLw2cpsncVElZb8ylF3j6jOOIlhHot3yHtR50qe3WkVWALgoApSc1UJNz5_60mLn2XCyVkArNi6xtatW7Q9lOAhyq4mr1pQ81foJvzp3AgmHb25UQ11xGrxrBz_c5mtYptR0MgWa8n7c1JGnyAxkOqiXftjCZ_3CEH-M5-naIeGdDpGCssFA54xeOOCJfzzFVW3p9Ovp94MU=w750-h552-no",
      id: 4
    },
    {
      url:
        "https://lh3.googleusercontent.com/Cm5RyZrtqc2wNaMaBBh1f88fx2QWjtSl_RV-VhHDeJn-xnFQJMqqu9iL5bBN4mHqQEzkXq_X1Ni_V-iqapZltm4PBVvS3PEyyYB1O_A2DKoHFblP2noN10UzV7PPUbvaf_jtLZd7UujaroCD_--BNFPKr-hZhsAWsy3JChUfyUvWStOWIDf5-UZPpXpqNgIbTQ8jusAzA_eD3vmC-w4ApWmA3uixPFYWXI39Xm7jAx760EFzJFe62fdLCzX-2WiIrytl6WCH_vUXJP_NE48cR_8JMpj_dQfU0FfF3x6xK7p6PLdMMv8SiQQb-cT2EKBO7TgkruwVumhIU-mkB6g5n1_9r3TW1oVo32-uCF73-7-DZKZTVIEPPghHi4t3gA0glz_qVBDMLbyuovNpAb6MXYZQ4kM84CzaOlotPNx_0GrmJT-Lh5xal4QVjIW-bjO6DajrxnKGdZzEEkaSq8qJZxgOzVimafAg3I2sDStHXlpmHSzNukzFtXNHh5Ge_c5m_tujBC0YihQJigErc7N5BvsdYKz3EKhGJf3YEVhtR703Mx1cgVvOKQGokwMHF3DTBHMnhpmogBSX5HL3G33TOXHuskdYdvH9ItuDhxrAeLaRQ-WEkSPBNVdSy0ezPMmXazrkKgiZ8yiMADUnAUKdFoOzvVGHIRI=w750-h548-no",
      id: 5
    },
    {
      url:
        "https://lh3.googleusercontent.com/u-3HNJeRTOxBx6dEerXRxnxdh2D1aiqcbAeY7MSAH3_gSyARK_oOixaa5hkQR3HpR5o39srboiut4D3050jtjTTUfbIMFxBmbybOfF_6R4-ZINMlXOlpQTLMOM0NY3e5bdpR25EvwvFSexkU51008fhVn4FkAL_oHEQOfdlyHCszxsYrs6RcuAq76vb_lsDrqc2BpDp3N-hlw9B395i5D9Xm89yku4jvVwDB6RuukoQ-tkz_fW8V1wCM_Rd9SGSQnkaTYMD0AKPufbRdt42KRoVS5K3RXCaD2vXAUzbHPN-OUPmJF9FXJRs12_Y4O7iLVoZNhBzRPZ3EW7RtmnCeAY9INXG56v8ZFRxAf8V3DDERNtAZnd66wXTt-810dp6ARDNgQIdGnixJ66acL0vv6Z9HtyGLiDnRQign0bWmns2w9F316ctqhiCVCzLjy2NPOZ29h_hKd_oARXKT946ZOjez0FCbTODAsKoLNIsl1fLGey8lmo5DKqzVKA9VR10-_ALvMBmQB3NbmP7e2uPCsfvWumutQ8Mvx6-ymR5S6_7psZMS0E0qjgmXLiPQn6i9gcglXchB1dGI8OV9f7dNPnG2toCPJQaaaUOYn-JYw-ZbhLlVHlt325DMWqkFg0wTaENabfUIs2MwiJ21k6mdyzJ_tADwZx4=w750-h546-no",
      id: 6
    },
    {
      url:
        "https://lh3.googleusercontent.com/x1csY3RlZwf5qYup6dEJ3MftTAqNyimlzpseNusRvXPgVR1SOsX3gaLTdgtU1lNO5yN4KePth_URSW9Aw0rA9cehG6t_ABdlltxBiVN-ja8jsy6hixEVUZtUEmAYyk4NE_mDAcIV4cxupozY2x0v67-_xCWfOJEFsnpr9VG3hSJg5ASHnqlJXDAWw83F-oQRSfAMTGTz7bWZ-zHGv0qJSQzcSuUybVIFe_jz-d4D0Ty6krVGt1mG3wAOFqQdin2CWH1PVSY_MdQDgr6QrQ3C6RnezGF4wGSaTvOQ1ND-sCxArEvu0DaT7piF_EO5kz8s7CUk-pv7usOfRPHslXmq-7gNMqZXGH_n73s76zAsn_rObrOb9s3fZuqK0ur_ObGuYCuUdw-sFjsB0aGW4d8VZ-g0H8WgKXxe2BeldhAcwC76Cusmp5g8s5FfLYx6N4Oza7SitdmmFpmX2TvXBPJX-q9YT1QouZdOyX9M5i1emr_SzAibBTdUXQxUEuHazotLijha8SBurGw0o4TfFBnIhPhwiKEhWgwM_aixm2bkxTNdswYxNyvRGuVJ2owVEcRzZg53xgN8J9-Ea3ojfPEVCgdP1DNaGHDHEugiw2hVDXHEBSg7OQiCM2CyzEONtx_DRECW7_nfJJ10SpK9x9VrZfpXgCWq6mU=w750-h574-no",
      id: 7
    },
    {
      url:
        "https://lh3.googleusercontent.com/Zv4ZWXEXKKCuVBnbTjYVjyEGciPElLU_qrLIPVy0OosCzR3qHMe7bL2rI1ZG18hRoktmDVwPYaBJhAav5odj1rkA1ef-22QB2pAxabooAYhUWAIzvIFcHU_o6zxtaEoHHdf9lcDkAp08Ge06Kj4ReSTrYslSaPM-gagMWaFQhJvTvWYZOsfn8mV25jxPOmc6m44h2AG0brVraTZ1k1KNTt6Khl6OPhQBddaUuiGHjPgafbeEDxWg7krdqxFAk6KjjB-T3RUkj8zwmLOh7XA0IKSRR55ckSSgBmwD-ohR_0XyXRVrcY_fpRq5cRzy1TJIEeV87orL7ZAeivQowSD9MijgixWtXABQVmBStmrMyyg_Vi2lr6hpsaNDm3Hf845hnINpW44UHkScM8PuTEtZ2dz7ePS-_ax2wBa-S3Fmslamu8p27I7rROw4XszK0R_rktUF8oOmER0bT0TJLhYfQWG-ZrJhiivz4DyYmdgyAEeXp8K16FYwSHP50--x-giFTrfLyuteyTlfFPCbwaiukMAX16sM13-UcRhMJ6z-bBzVgs3AeAFQaRiTx79NyGxDgDx6RrLsyf9Uqrbng48xmOXmuViyK-_QmjYYlGQcUN6dB7hXe7D7u-5AabOMWBYW5te5mxFwXKPUSV9DCqaaUOtECCejgbY=w721-h558-no",
      id: 8
    },
    {
      url:
        "https://lh3.googleusercontent.com/xXnu9bYEHN12k_6ZKGoOHIDPDRpDzuaKUth5Pr4M-AWN7BMCWKP0ToT-2NFobWlYSoQoAL6kXl68pnBJFaV4BcQjQxgQFXwiEZFY7Gspbe9zjUSy2biK9d50_JxyYMhdgRQjfkHnurCOx6ibTMzepj5KTHsK81iLFWziDmW_qStoHjp97aEr5i4MAC8VMaAxSxKwlxUZfHydpZ2pD75FvPdFMZxjpBIqkHytTykAs3OjeaOTvynwgg51z-gfE8fMKnPIIiV1hZvEKp1b0bCWZOnpBQ4oVVwyO8FwMymRplAGVrDUVu6mKRkH3mb4O6xTfoJ_BW3uRsK7V95rAcYjDl240LSBD5jaGhAvy9P9UXZcJU7zPKoAARgrEelXGazJGW6Sj6r5KmWf2bdnVDNSjbhvzqQekcvpvVs04sgL6R2kyPv13mYBaBi0BjRtIMjGzUrtCG4IGOxtcDh_p4Wcf3PHI69HgbbhSorc1opFEFS4M-raE6yWN5t8_2QOIYJAIpGLkheuf7QXzHv8uQnoqYKlaiKUiXgDjtiUbfluflhfG-9K5EMzKAI3BxP6GYCb-1eiaOOAZedXDjZGFOyeET4h3NWyAOviNDUTlKzz_PPI-78PaDMl_tnGUmoRbRGSzfFYGt1OBPg9YVb8fGCxbpzNz8n1SiM=w750-h549-no",
      id: 9
    },
    {
      url:
        "https://lh3.googleusercontent.com/91hgVH0XT-1_R251HUDMAF7j4yBpS4IFg3Xk2c7F_jy844zwBZh6djw_C6wHD_Tb7-AWWFgeSruNk8WtzwbsF5dEq45DqesYo7nEWfKGn3RBqKXBovFkYChohpzsPjXJuyJV_a_zvcXjw-yeG_UsnXxcudmm1ZmF6_Ts_4CpvNALzC35GVS2sytL5VaFXBqdE6_s-2S7rM3cBVWjyULVv4Cxfl-cLNzadUnbX0jng32uFYhK9hkPNCitV0X6Xs0XfKehZXTLoQFhdsvMURAOfgTKIsv6pmuEqrxOnbd2q_1xjUxWZzgEu0Wb50KWMO2ekAuQP-F9hYOwZY4pO5hVg2jDRgClPI_1CAbP5CTHd055pCUQrlVIqgIGEq2Zb0_jNa1LM81j3EW4IDiFU2Lc80BvV73rPRjx4m01HvD8JnGCqjHY-ZYy3WXg1EBTpJl__z7hXiE3Cencz6om-1WpYw1xpeyYJDw5y6wx0bN8jvr8RkGVppNjI9CCMNrp29ncBWUWuwohaIyEWLMBUDLaQoRPgcqU7zzJa_C8j4jXQj5V2_WWpZUIek7owPD9Bww9Bzvrchz9TQ4ry7_SZ5STYtcVnT-dxsqFeSo8qmpHA6U8aeTswpC8Zhk2TzfOwkD7mE53-ntfJqEnR2HRMq8vcAlMD2vk3yM=w738-h568-no",
      id: 10
    },
    {
      url:
        "https://lh3.googleusercontent.com/v-6c6ODlWGyA8THDCC-LWaf9buf9to3xqh5MxqzIwpyxfEP64p1v1iL2Aj_06h0BhTZkXXpvoyvO7QnDKlGJjK_4XAlHQ71ia-AGMKlYTHnkeKoh-uqG7_BYHgu5tv94ErweTnrpLG8QumKv1aqpi-i1Ja7HfDAubLf-0dlfPYxpOrmheUyi26iJkXj-O1j5OAM3LaqCiy4teS7aZsYzy-ZmiWmfZ8FUCtFuur4L8eEpDWxal0h_j7enN1j_F-Hh79i8bevEWxuZYm6OpY5CBlvPVOXhquHg-XkGpk1FQOZx_SD5kJEzikvkoTAfoZgNzakkU4oYPEr3YO9o4IjJYlD0WSimeIE2ss1I5Yfb4329EBftTeNff9QfjoqnEiTKl7Y-WlFbd-eD2lAQp4hPwXYipPGzl-EBqOtew-5SMNZd56i4t3O2Dvf-XMEnpQ_ELR7K9Cu9CORpjVBAKc8hDUt5gEMnInwD5PpjDIMN-w0OPMMiEyjO4WJniKGekNrOms7c1pcdlxq2M1O6abzPGgtVNethfZw-NHFPZmYqeZKDRZNJdAuX65LXS0vwZiqXgOZ56viMks9I1tuGl-FoUnV-j4pKrH1VGcLUfEDCMW6QOD8278syjK5xWeMofb52KdbU11WhM-Oupk4eFVjjhkqEdqXLfH4=w750-h568-no",
      id: 11
    },
    {
      url:
        "https://lh3.googleusercontent.com/8NGgJsM00cshMCAxC2dx7w0AeuXybjKFPLhG4oYqiCBo1GEa1eZa1N7VJ_ULczVlOwRW0zbUYxf7XD5Q_8BPLUU5PchIYN_xXmfviEPWG8YSCCYXQG6B7bWic8EqJPVkq5WDNqkPhTGmAptqdShPOe3MpSiRioHa37-wG6EjTYr8QtkJzHl-iplQxSpfEElnKv9sCCvYTjyfzAEOjrrO951pREUXXiZxyUeM8piNVu31pWRj1vd0ApdL3f-tc2zWaMb1eXd-V0P3fMxCZnoSic5pEjqWb2BVdcBx89H3EbqMmkoekDQKACTNACfAEzwJ87XUABQms9tFAS9Ny4onX6xRT3B-GBCPsoNks9aAqnOwernUioac6n-TVrXLHBxiiM_VeT3Htw3P2pTk__6w7EXotlFUyhAv9NKzQ5p4ybHq3UX6NIAxTwH8QeTvk5dH5z0dooUkcCt-W3O89hMyzAbFjWCxWV3D1uuMp-zAGV8dPA76IzkhpaFT0ibssETes9th1ZoA6Qd_cUgiMduYf9doOm2bO3iM9W28w1dtlO7mxSa4cmzyQE1UUIbHK1UCyanjqiKu22139YLTz-ruKmosZASoqESG3KHg1JeDJnTr8MjFKsAQFszGBdhyHgBidgzQfCcCki6hKjqJUF9gVq_U3kDrXEg=w744-h555-no",
      id: 12
    }
  ];
  const afterImages = [
    {
      url:
        "https://lh3.googleusercontent.com/at0jbppMqc_viXPJOFRzNiBQ69kbnUncZjQmkpz8Bn7RgNuldRde7eKLXaak5-cKjjJoLTWsRI9GPwqBsZzsPlyYbY77gjFF3BisZaQMDfdNSsj6Sk8g-Bn11cq_-o8VLcBWq03ikNNmYTrXvOdDX1p1gVc9p4v_pfacfNE6H199KEgem-oSjyQyRTeaOtBqS5l9muaEKYTiOVAjk-qESwYAOH9i6f10ITwhPEKMqibd63vHzGrJBASM2DR5DFT3oXOf_SXbrgXi2oFRQ4h5rwQR-PZvMnwsvtIUFj-b7usxaDm44hUai76mtppRfiX0clKLG6kIAtUCZ9SjK7KXK4U8AzrmorqyyJfIwudF1LfSoSvfn-MyoH6as__rFX7WqIQRbIz1KeJZpju9WGTc8__9VOxfHlPsbBU42YNKwBstFROvntPtLdGoi-Exxi-wE5vz3Lq6uF9326B62PVM6EElXoMw7Nteu2fmKgBqGEEboTKydef85QEHY50pCLxUQHBNS4Vo1ce4rzMqCdtKKjRXmbcckdTVrlbN68jzTKHSwqUzD-g9AXp3KfNnD01cgJQCXlxOQjxT2RoTLB1KOB6RXjp-43awCecS3o3zux4D64gbxmtzBQpaHoPQPjZC_LU_2068CMc1k6bOT5zhA6Kp5cmcH7k=w750-h549-no",
      id: 1
    },
    {
      url:
        "https://lh3.googleusercontent.com/CwSh_BkcvbzU0crKsaDjODJCbFOfdcI9gQs-kU-4DwNPdhRYsHZW4yPgbXRzK4dW-d-xTlFOe31006Nc2jqDDHbCCIO0kOQK5BThCGtb8ZR3HSL9prYUeQQAs5fZpQuSMQLYXcohCWZPrGJ2E7amEw_2imDwnDf7KsHGpZAxPSHNWuLZjvpRK94Z3aXEZs0ZJIRYUCNCV0zn7Br0h6TqSBR7zsViweUZKtcDvTU3ZfGEBRe2Aj2WmxctIj1oV8FDeFZMdoM0pKXO0JagBOs92VFT_lrd_IzmUDYNucBWI8fvJtX7jkCQX9O9htM5_cDX2WFiFBB8EGzr9ml4xGcO6WqQETLg2myleqYfff6plWwDiDJPxvhPRzFj9wBmpmeWw40sVPBcw4pNPm0R3B5XY36Pd1TGtvEil86dBFe_65o2hyDjXUOmuZtYbIpOJnY9x5EP_-acN9Z9j0vuLdDO1A91HXZdUsJXoJkzY_4pUiWui-9d1ZQDR48KPuibseY_wnLT7blC1XftjM8o637f3oCHRJtQ98cU0dBKOX1yf0A_90LNn5jy_jRpqASRPTjXuLOESfckPU8-plfOelNQ5D6VvEbmSFexsVJbcMZT1jM2AS0Sk67D2hY203aFQWwwXnIUKJjA1nV-viVoyO-avuI4nvotBDY=w750-h557-no",
      id: 2
    },
    {
      url:
        "https://lh3.googleusercontent.com/NFG629FdbRAvhCFNH1Woc5YG5NwBwvHZzCBWhtIJdpKm__6Ob0C2U7ipPQc0laCRF1KKw5YNOG6ASaVzQDNBXmI6XtMzEAVba6rumf1HNpUjw4SxSUNQP69Pc3Qt6SW-oAiquITBWfwh69XmpLms0x-XZUasSlDdyDTh1x25q8MghUlKwyzSQ9dAEUFiX1kDKwhauB_Bdsj4azMbDHqt3rajT4z4T74q8OHjXu9ukBjON_dUDv83-C5bh1hHSLClciiTjAn1KkNCB_MD347nZlfD83bK06QiaLnES_lGQ31VAcgWfuX3zLG4-J5hq_NLPvqVrmYn-D6ViQTMFbcy8LThic3N8cQlUaEGbJuZ6_gFgZdzgbENtcz6hqsvDHJgapR-8zfh1ZhgYW8_wHDZ78attNChCB1_Bx7jwE5Aw2vIsBz7czNN6VwWEnpn6xfr8tqhKihfQoMpaSVT77sVbIRNrKMO_f3HwQcTShf9FcwpLpVmKU-WrjAURezMNk-JpGJTdRzKxQygdKWjZ-kqhZ0UgvSAUa4CsAKCDkgSqAp-zhp4or0t7SvPK9V7LUPsBO8QLLoRKg10iMuELuhNLunZGNLm-_TM4YOL_Bfk_F_tjbBvYLj6os37KX5-ph1uwtCzK8f1QT3zr5YIP7AJDa-BFLsQR20=w750-h558-no",
      id: 3
    },
    {
      url:
        "https://lh3.googleusercontent.com/gT8soL4snibMcOS0vsLoZHvk2QGpFyTIe2CR8fBszvoyju3XVYJKcxN66C2tKXxRQFoDEi2V1L5m0jCRwJT9MmZaRduKy4Gu96N3-1ENgjvea3DQIay445NQ7VsTa9i24R_STn9VVytheQzvgK7OEjKp04XHyZBeQKKAFEX60pz9xtxc5WHW436w2wOlQU0tN-xff1p-D9vnQqKESnYDhuhQIZN8ueoUQttvl-F2DDv3Q-bbsklZnjbR7xme2O-9ID00ydOFVQQFHFm55GVVU2N7DrKucQwyCW7dQKMOczdssjpjCYmD3jpddP51WxEsGWebdY3C4q76MlGVbgcdvKtz9c1gSpZNDXSJ2FTaazXNhOX2B1RoAm2UKWggeEtFi-OX20dirJeECy7Xd4RFQ04Fl_DOwBuqqK4f2FMOvh856VL04pFq_iotAQBuQxpMDccZjh4sz-jRqGrI0DxqnPPOvlSSXYCHBbuq28Nmiruo_i03Xv1GVvXWZtdoMKqqxLz-Cw-VpQ3xTwaqS37jJW--GY4WAxMDOqcHv56BG6MvJtNKSbPBZzO7JN6nt4YfQGiHe2SjAHgOP7uzYKzlk4vw4uq6WDtui4sxB42-3H2TDmw0ooVq_q4X2izfJgUXCaYg5UI2r1-ss4joKdc5Th6BM4MPU2U=w686-h915-no",
      id: 4
    },
    {
      url:
        "https://lh3.googleusercontent.com/UDkkbxk4f0knaVku886O6VIDXrS32zrOupnzKoCb57-cwAggxvQ9XCRGqaDMqHWnnjK31pm4p9XHQukyjI-q1XDjbjWbS2Lc5kwuqxvrKALUZ4nSayW5iiFHeOXT7kBDEUSwOw8fjOCoNiCvfMx5Dqa0Pd8-_fo2MQg9oREBab5v9xsoX9jR-3W0XMh3couAJiBzuDGkDygh6lY68ucAlQqX21ut2W8ZLcJ-dXj22uO0Y9z_L-lEzPFSgy8OS4KHKd9Y_oObHBFWmkxg6rSP3k3ZdWe4k0aGEpUURHvkEMqYQR05xoEU7ngkEyBjjIXe9-fqbYHIUTmXZKd55Ne3klX-B-7ubYPT4-i4naddTqyjirs0BBWb7asDkQZFgz_Al0h4Knd36JjBHNvwtHJvc1dHQB8gY-RdoYI4_RCOFZEjbfjiaNFxftmIuIiqF5wM60FIhnKYMv76ZC_IHuZwly0f5wNnNQHmy73kBmxA6q-XXPqFlUgTJSH6YTLQWnDS2mKLxTY8wRzK1GP6zSQLkVNRMTrJwpbwPvVDtilikfYe-A2cunaX8YfXQyNs6VQ2YqzUPJcS8ejEvzbOUvI2zXTWwPsX2smTBl8Nkv72cV-AaDI3EXZFtVquys-3BxmulZ3lZ09Tb5-uZ6KwOc1-rdekd6YFTmg=w1219-h915-no",
      id: 5
    },
    {
      url:
        "https://lh3.googleusercontent.com/O5GcbJK6QG-DgDRkzGcYWSejgqj1GEdcojlfrQraVVh3hQcOz84Aisf012ahJv4hLsZ0nuoLYQnbIC7dIHQdlWcPp8CfJn2gdgXQbKJsxAB58qPrDwf9ynRagV5zh7-rB06qHAzx6Hz-ZhZibcYLYvzweIpddWcvN8dONUZFSYlD8mPoFEkkAvRhZnUtzHSeMf6-qzZhUv3G2VpTYsfoPiwyAG1ES9H_cEbFe4tDFGySjURUZ4ZeZZ_adrElOwSNZDKOpqsEaf-OPrLo5ugNjcA9avO56HxKsuvPLPXs-ZysUbGoH6_NCvMSiAZzCIUmEsQVgTfvK7V4U4u0H7kXSZjAV6Ya7nfqFounmf0eylX1V8wG5L029DLDaP-SjOh8hZJH4It9QYTduHpESzdUBgqIeZo1U8f4hlFzXH2lvnz0vfE7YIjOiRQhq8FkD-FZGzJRSsFBZDxsQrNDbqxLxwCxMa0NZcER5VAoiF20iGqfjMMpInJAqJrcAmpdqqzhbdBnQCF_qQwJfObfDMNLmZGvAQDyGkAeogOtvr_hle1h66CULWoZs9oeSWXqUbZvxFZMiWoF0G3dfUEEpcvicvzGJnE-StII6XggKDTyCcjuEil9dxCGK40EqTpFbtxy5UKSKaTmO_SsDSEHHfAAvZZaAWo0tpM=w1219-h915-no",
      id: 6
    },
    {
      url:
        "https://lh3.googleusercontent.com/FzYj78cWNUIj__7f_MB8f_pNznQ1uum4-BBS48H_1OKG229vuqQleAJ4LuMOcbX-EC_iVrJ4QClmHnUqHDeMQGYT69vUpg610otis1aRTFbfOJLNN_5o6bGkIeP7xx5hPikeAvoLPZHlmbVbIRC-MjBc1szExTBTr7qutVnM1cvqRTj1b_l4UZyWJbAZHzN_fP4TrKEptooYuNPwZJgEhL6iQ3SAHrhdRWWLeN2uJShR6X0-SI5ithrdeDTThFJZ9LLCt6Vv2wmjnNFasj--mHRr3EorPzKdGPB1vRetxcpDVylesAFTafTsBr-SG2fO2GO8Bc8OkVyqc6FW5z4oG76vY87h5vJfb6FKr_fI3yeLqhTZB417-NdQZ-rVQcXipSlknffff3kkZ8r96l3_4Wu1hGxxlzdAsC2bDeHzFEVJJZyscfE1ZxWMmQ1inmtP_R-43zJprk2dhXydGDppONT2otzu9-jNbNitolPz7ZT0liKvoofxMXWh35xavSX-fJ8026_isA1YFuI3s604X2RA0nsTDSDSP10WqWDMDU0BocYDXOcZfEoCItpbsDVapYUGZ5jbBqcbXS0ziHIB2_X20Da-K2-u4Vnk1hL9d60SP4OpgNAaLwGs9xunj6mkfhs2FTZBr48oy7v0TcAE5pxHULTKo_Q=w686-h915-no",
      id: 7
    },
    {
      url:
        "https://lh3.googleusercontent.com/B1MkjY-cJryzm4Y-VSDM8mBz2h02xBsJTvhjv_GdNDjrZcBG5LncZjbCJmhdt89vPMOwkhk7DakK370SAc9Sh6C_aiI9gkNZ-SCvBUe9kjKkokHS6SU5j8w3ITSD1bTHMgrgyqzbSf9bm2jZoJvVjIRNkeyr6ARL8EpoKh7MXT9nyptZR9VV3NfOvV51NGfGVZkhSM3lFEwmbpe8aVhnkpGKCaIblbA5SNRuTYzpGzDr0dK4_zg4fxRnnXqvFFzW8be9FnTVsvaxhdNizjjOAQMgfm_Yvq6VWFsMcKA2TOLc1GDKCRjB4xL0RzqRD4C_H90P1P8sTw4ryio9Mv802wFyOp7hG0lLqkMHHXVY57c1hUkty00mI8TUaTwbG4xz-sM2ueLSaKBUj0ETTYtWCYDk6UjWbWoxR7rbSj6MQHGol4S1VqATKWrmslOWm3WWC7lMghnB2TOO3KgMi3Oebm1cj90sP2SAf-RvlAhTIsRJozDmZH5XY2HEcwsnAV1VmNMtRq61agtOmFyT3KX1kBuN1d68Vt2D-VobRKFrKeed9H7ItrjM4ZxLYsblF_7lwPtbqjF7ImS7Eapv-z6weyykiqof5HPyBIxZXvPKtlD49JH2ufHAQX-mu_sN9GGpEPhXtMC7ZpXTuE3N7qtfAF03XS5MvV4=w686-h915-no",
      id: 8
    },
    {
      url:
        "https://lh3.googleusercontent.com/EC7jIlVYIfms2F6ZPm3JgEU7kQF1A2bXCqKYKzjW1Dl0K8zgaI-isr3xTE6p8BqlOxQ-q0w6whg4fCMcvfyMtPy9ICKu8mTp3dZZ7RMKRgRr3rBpUIjPwI7RQQR4I_ylYGjYoHWIBA2BFTR4irmXXReDm_oYKG5b_at6J8LvXUpnjKQS75M9hVpMBRA26hykvxF6DloOiBERuH6et0l3MOORq3ac-N_97knUFDPZbsYrJtiFxQtIDCIDjnjgdSDZF6JTRJ1QAIRICSCMDzzHL18DF6v-xEzdhfSpAa0WX5ZcJS8y4OdOXbNqY7V-KzQ8e0laYcFqBaF7-QbJNMCNRay_qdlnJ1L91cVSkzveEajHOsIqlCVNRR9N7HlvHjf5X89Mxp5JY6EgkM4pZ651L_3CUTt_2Vnz1PWnRriFwZT31WQjLtOmcZpXaEs2bWYiK_FhyQ-_eM20gAexAD2013WGiESGc4OgpjyRN2yX5ZV9pOScC7MzNKmRQgwBkWBn4Whym4tGN6Ju17ehkL-F2PP8P6XwyVoWJXEGlVx-cEFbf9Zgdel8NquugMe5PnaMIZlfO9gIwbTcdYsGHWx1Ni-WELuPh1_zhe9osfeFDRhvJgMVXPi7nBNWGTNdpufokEpCln4m24irA6uorfnCLYqHsWwqJ68=w1219-h915-no",
      id: 9
    },
    {
      url:
        "https://lh3.googleusercontent.com/k8xQHTjUOVn6nRX45wMR2P-sL5MFe4TjrgbzKmk8T17D7UBf0567f_50Hc3CFs8HF6a0usS_pdvX_aIP9OTCCKrs1yAeHXwh7cd2_xGHVtS0fwNGoKueEIF4aIhRw3zp92XgjdLKF640J4oAX3PxDFpFywppUCUjeBmd7hrA60I2pc7uUfQmo8ws6GYVl6LPP9_yJsVs7TryhlXCPlcwCXMA3WGx1soupOKN-5TXs_Xbxc8GHJtgM9PMzwlUWu4s0Jc_oWjoS8SqP7adT8Gn0f1JWphCymYOmgTG2viFW6e6khfrPQwO1h7BCvMRNvVNxlUCNYCfIxeEqrHZHeHeJHkh23poZgAAOfLzfAZx7s7g_cUNNE95UWij1cqvo9bwKl7ejs6G77cq1geqt1KOQhtbGiju0RqLV7JDfSSlc922j1DKIR89Lub0N5VxS8uBybTEws4_WrILuEtuF328pP6EEyGufKIOFuMrNAh_EFIF1E-7yCT-Cd5IYLRvlIKjG7K-zYBDh9BfzVaSft-0LSWKpSVo5czIXBCmu51HwkGOMj9_b2C8pRfo8ueNjUNafllaB7JxGIboJp_ylhKSCK6jlzMJQeIwmvHXgX6D0qbuSjFXA_nEfBaDaECvYbC9gINKwq3D8ynbnkLdaztg-6yfsYisOz4=w750-h559-no",
      id: 10
    }
  ];

  function viewBeforeGallery() {
    props.history.push("/projects/remodels/1/beforeGallery");
  }

  const viewAfterGallery = () => {
    props.history.push("/projects/remodels/1/afterGallery");
  };

  return (
    <>
      <BasicNav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 d-flex justify-content-between align-items-baseline slideHeading">
              Before
              <i
                class="far fa-images slideShowIcon mr-2"
                onClick={viewBeforeGallery}
              />
            </h1>
            <div className="card-columns">
              {beforeImages.map(image => (
                <div className="card" key={image.id}>
                  <img
                    className="card-img"
                    src={image.url}
                    alt="before photos"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <h1 className="display-4 d-flex justify-content-between align-items-baseline slideHeading">
              After
              <i
                class="far fa-images slideShowIcon mr-2"
                onClick={viewAfterGallery}
              />
            </h1>
            <div className="card-columns">
              {afterImages.map(images => (
                <div className="card" key={images.id}>
                  <img
                    className="card-img"
                    src={images.url}
                    alt="after photos"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Remodel;
