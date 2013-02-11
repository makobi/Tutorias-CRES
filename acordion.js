

            $(document).ready(function(){

					$("div#su").hide();
					$("div.Biologia").show();
					$("div.Quimica").show();
					$("div.Fisica").show();
					$("div.Matematicas").show();
					$("div.CCOM").show();
					$("div.CA").show();
									
						var $counterBG1 = 0;
						var $counterBG2 = 0;
						var $counterECO = 0;
					
								
					$("p#clickable1").click(function(){
							
                            
							$("div.Biologia").slideToggle().delay("1000");
							
                        });

						$("p#clickableCB").click(function(){
							
							$("div.ClasesBiol").slideToggle().delay("1000");

							});
							
							if($("p#clickableBiolGen1").click()){
								$counterBG1 = $counterBG1 + 1;
								}
							
							$("p#clickableBiolGen1").click(function(){
								if($counterBG1%2 != 0){
									$("div.BiolGen2").slideUp().delay("fast");
									$("div.BiolEcol").slideUp().delay("fast");
									}
								$("div.BiolGen1").slideToggle().delay("1000");

								});
						
						$("p#clickableVBG1").click(function(){
                        
                            $("div.VideosBiolG1").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1BG1").click(function(){
                        
								$("div.lugar1BiolG1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2BG1").click(function(){
                        
								$("div.lugar2BiolG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar3BG1").click(function(){
                        
								$("div.lugar3BiolG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar4BG1").click(function(){
                        
								$("div.lugar4BiolG1").slideToggle().delay("1000");

								});
								
						$("p#clickableLBG1").click(function(){
                        
                            $("div.LabsBiolG1").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1BG1").click(function(){
                        
								$("div.Lab1BiolG1").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2BG1").click(function(){
                        
								$("div.Lab2BiolG1").slideToggle().delay("1000");

								});
								
						$("p#clickableTBG1").click(function(){
                        
                            $("div.TutoresBiolG1").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1BG1").click(function(){
                        
								$("div.tutor1BiolG1").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2BG1").click(function(){
                        
								$("div.tutor2BiolG1").slideToggle().delay("1000");

								});
								
						if($("p#clickableBiolGen2").click()){
								$counterBG2 = $counterBG2 + 1;
								}
								
						$("p#clickableBiolGen2").click(function(){
								
								if($counterBG2%2 != 0){
									$("div.BiolGen1").slideUp().delay("fast");
									$("div.BiolEcol").slideUp().delay("fast");
									}
								$("div.BiolGen2").slideToggle().delay("1000");

								});
						
						$("p#clickableVBG2").click(function(){
                        
                            $("div.VideosBiolG2").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1BG2").click(function(){
                        
								$("div.lugar1BiolG2").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2BG2").click(function(){
                        
								$("div.lugar2BiolG2").slideToggle().delay("1000");

								});
								
						$("p#clickableLBG2").click(function(){
                        
                            $("div.LabsBiolG2").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1BG2").click(function(){
                        
								$("div.Lab1BiolG2").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2BG2").click(function(){
                        
								$("div.Lab2BiolG2").slideToggle().delay("1000");

								});
								
						$("p#clickableTBG2").click(function(){
                        
                            $("div.TutoresBiolG2").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1BG2").click(function(){
                        
								$("div.tutor1BiolG2").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2BG2").click(function(){
                        
								$("div.tutor2BiolG2").slideToggle().delay("1000");

								});
								
						if($("p#clickableBiolEcol").click()){
								$counterECO = $counterECO + 1;
								}
								
						$("p#clickableBiolEcol").click(function(){
								
								if($counterECO%2 != 0){
									$("div.BiolGen1").slideUp().delay("fast");
									$("div.BiolGen2").slideUp().delay("fast");
									}
								$("div.BiolEcol").slideToggle().delay("1000");

								});
						
						$("p#clickableVECO").click(function(){
                        
                            $("div.VideosEcologia").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1ECO").click(function(){
                        
								$("div.lugar1Ecologia").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2ECO").click(function(){
                        
								$("div.lugar2Ecologia").slideToggle().delay("1000");

								});
								
						$("p#clickableLECO").click(function(){
                        
                            $("div.LabsEcologia").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1ECO").click(function(){
                        
								$("div.Lab1Ecologia").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2ECO").click(function(){
                        
								$("div.Lab2Ecologia").slideToggle().delay("1000");

								});
								
						$("p#clickableTECO").click(function(){
                        
                            $("div.TutoresEcologia").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1ECO").click(function(){
                        
								$("div.tutor1Ecologia").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2ECO").click(function(){
                        
								$("div.tutor2Ecologia").slideToggle().delay("1000");

								});
								
					

                    $("p#clickable2").click(function(){
							
                            $("div.Quimica").slideToggle().delay("1000");

                        });
							
							$("p#clickableCQ").click(function(){
                        
                            $("div.ClasesQuim").slideToggle().delay("1000");

							});
							
							$("p#clickableQuimGen1").click(function(){
                        
								$("div.QuimGen1").slideToggle().delay("1000");

								});
								
							$("p#clickableQuimOrga").click(function(){
                        
								$("div.QuimOrga").slideToggle().delay("1000");

								});
						
						$("p#clickableVQG1").click(function(){
                        
                            $("div.VideosQuimG1").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1QG1").click(function(){
                        
								$("div.lugar1QuimG1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2QG1").click(function(){
                        
								$("div.lugar2QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar3QG1").click(function(){
                        
								$("div.lugar3QuimG1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar4QG1").click(function(){
                        
								$("div.lugar4QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar5QG1").click(function(){
                        
								$("div.lugar5QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar6QG1").click(function(){
                        
								$("div.lugar6QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar7QG1").click(function(){
                        
								$("div.lugar7QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar8QG1").click(function(){
                        
								$("div.lugar8QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar9QG1").click(function(){
                        
								$("div.lugar9QuimG1").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar10QG1").click(function(){
                        
								$("div.lugar10QuimG1").slideToggle().delay("1000");

								});
								
						$("p#clickableLQG1").click(function(){
                        
                            $("div.LabsQuimG1").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1QG1").click(function(){
                        
								$("div.Lab1QuimG1").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2QG1").click(function(){
                        
								$("div.Lab2QuimG1").slideToggle().delay("1000");

								});
								
						$("p#clickableTQG1").click(function(){
                        
                            $("div.TutoresQuimG1").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1QG1").click(function(){
                        
								$("div.tutor1QuimG1").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2QG1").click(function(){
                        
								$("div.tutor2QuimG1").slideToggle().delay("1000");

								});
								
						$("p#clickableVORG").click(function(){
                        
                            $("div.VideosOrga").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1ORG").click(function(){
                        
								$("div.lugar1Orga").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2ORG").click(function(){
                        
								$("div.lugar2Orga").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar3ORG").click(function(){
                        
								$("div.lugar3Orga").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar4ORG").click(function(){
                        
								$("div.lugar4Orga").slideToggle().delay("1000");

								});
								
						$("p#clickableLORG").click(function(){
                        
                            $("div.LabsOrga").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1ORG").click(function(){
                        
								$("div.Lab1Orga").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2ORG").click(function(){
                        
								$("div.Lab2Orga").slideToggle().delay("1000");

								});
								
						$("p#clickableTORG").click(function(){
                        
                            $("div.TutoresOrga").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1ORG").click(function(){
                        
								$("div.tutor1Orga").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2ORG").click(function(){
                        
								$("div.tutor2Orga").slideToggle().delay("1000");

								});
								
						$("p#clickableQuimAnal").click(function(){
                        
							$("div.QuimAnal").slideToggle().delay("1000");

								});
						
						$("p#clickableVAnal").click(function(){
                        
                            $("div.VideosAnal").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1Anal").click(function(){
                        
								$("div.lugar1Anal").slideToggle().delay("1000");

								});
							
							
						$("p#clickableLAnal").click(function(){
                        
                            $("div.LabsAnal").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1Anal").click(function(){
                        
								$("div.Lab1Orga").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2Anal").click(function(){
                        
								$("div.Lab2Anal").slideToggle().delay("1000");

								});
								
						$("p#clickableTAnal").click(function(){
                        
                            $("div.TutoresAnal").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1Anal").click(function(){
                        
								$("div.tutor1Anal").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2Anal").click(function(){
                        
								$("div.tutor2Anal").slideToggle().delay("1000");

								});
								
						$("p#clickableQuimInstru").click(function(){
                        
								$("div.QuimInstru").slideToggle().delay("1000");

								});
						
						$("p#clickableVInstru").click(function(){
                        
                            $("div.VideosInstru").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1Instru").click(function(){
                        
								$("div.lugar1Instru").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2Instru").click(function(){
                        
								$("div.lugar2Instru").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar3Instru").click(function(){
                        
								$("div.lugar3Instru").slideToggle().delay("1000");

								});
							
															
						$("p#clickableLInstru").click(function(){
                        
                            $("div.LabsInstru").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1Instru").click(function(){
                        
								$("div.Lab1Instru").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2Instru").click(function(){
                        
								$("div.Lab2Instru").slideToggle().delay("1000");

								});
								
						$("p#clickableTInstru").click(function(){
                        
                            $("div.TutoresInstru").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1Instru").click(function(){
                        
								$("div.tutor1Instru").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2Instru").click(function(){
                        
								$("div.tutor2Instru").slideToggle().delay("1000");

								});
								
						$("p#clickableQuimFisi").click(function(){
                        
								$("div.QuimFisi").slideToggle().delay("1000");

								});
						
						$("p#clickableVQFISI").click(function(){
                        
                            $("div.VideosQFISI").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1QFISI").click(function(){
                        
								$("div.lugar1QFISI").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2QFISI").click(function(){
                        
								$("div.lugar2QFISI").slideToggle().delay("1000");

								});
								
							$("p#clickablelugar3QFISI").click(function(){
                        
								$("div.lugar3QFISI").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar4QFISI").click(function(){
                        
								$("div.lugar4QFISI").slideToggle().delay("1000");

								});
								
						$("p#clickableLQFISI").click(function(){
                        
                            $("div.LabsQFISI").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1QFISI").click(function(){
                        
								$("div.Lab1QFISI").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2QFISI").click(function(){
                        
								$("div.Lab2QFISI").slideToggle().delay("1000");

								});
								
						$("p#clickableTQFISI").click(function(){
                        
                            $("div.TutoresQFISI").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1QFISI").click(function(){
                        
								$("div.tutor1QFISI").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2QFISI").click(function(){
                        
								$("div.tutor2QFISI").slideToggle().delay("1000");

								});
								
					$("p#clickable3").click(function(){
							
							$("div.Fisica").slideToggle().delay("1000");

                          });
							
							$("p#clickableCF").click(function(){
                        
                            $("div.ClasesFisi").slideToggle().delay("1000");

							});
							
							$("p#clickableFisiGen1").click(function(){
                        
								$("div.FisiGen1").slideToggle().delay("1000");

								});
						
						$("p#clickableVFG1").click(function(){
                        
                            $("div.VideosFisiG1").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1FG1").click(function(){
                        
								$("div.lugar1FisiG1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2FG1").click(function(){
                        
								$("div.lugar2FisiG1").slideToggle().delay("1000");

								});
								
						$("p#clickableLFG1").click(function(){
                        
                            $("div.LabsFisiG1").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1FG1").click(function(){
                        
								$("div.Lab1FisiG1").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2FG1").click(function(){
                        
								$("div.Lab2FisiG1").slideToggle().delay("1000");

								});
								
						$("p#clickableTFG1").click(function(){
                        
                            $("div.TutoresFisiG1").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1FG1").click(function(){
                        
								$("div.tutor1FisiG1").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2FG1").click(function(){
                        
								$("div.tutor2FisiG1").slideToggle().delay("1000");

								});
								
											
					$("p#clickable4").click(function(){
							
							$("div.CCOM").slideToggle().delay("1000");

                        });
						
							$("p#clickableCCCOM").click(function(){
                        
                            $("div.ClasesCCOM").slideToggle().delay("1000");

							});
							
							$("p#clickableEstructFund").click(function(){
                        
								$("div.EstructFund").slideToggle().delay("1000");

								});
						
						$("p#clickableVEF").click(function(){
                        
                            $("div.VideosEstructFund").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1EF").click(function(){
                        
								$("div.lugar1EstructFund").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2EF").click(function(){
                        
								$("div.lugar2EstructFund").slideToggle().delay("1000");

								});
								
						$("p#clickableLEF").click(function(){
                        
                            $("div.LabsEstructFund").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1EF").click(function(){
                        
								$("div.Lab1EstructFund").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2EF").click(function(){
                        
								$("div.Lab2EstructFund").slideToggle().delay("1000");

								});
								
						$("p#clickableTEF").click(function(){
                        
                            $("div.TutoresEstructFund").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1EF").click(function(){
                        
								$("div.tutor1EstructFund").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2EF").click(function(){
                        
								$("div.tutor2EstructFund").slideToggle().delay("1000");

								});	
								
					$("p#clickable5").click(function(){
							
							$("div.CA").slideToggle().delay("1000");

                        });
							
								$("p#clickableCCA").click(function(){
                        
                            $("div.ClasesCA").slideToggle().delay("1000");

							});
							
							$("p#clickableCA1").click(function(){
                        
								$("div.CA1").slideToggle().delay("1000");

								});
						
						$("p#clickableVCA1").click(function(){
                        
                            $("div.VideosCA1").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1CA1").click(function(){
                        
								$("div.lugar1CA1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2CA1").click(function(){
                        
								$("div.lugar2CA1").slideToggle().delay("1000");

								});
								
						$("p#clickableLCA1").click(function(){
                        
                            $("div.LabsCA1").slideToggle().delay("1000");

							});
							
							$("p#clickablepaper1CA1").click(function(){
                        
								$("div.Lab1CA1").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2CA1").click(function(){
                        
								$("div.Lab2CA1").slideToggle().delay("1000");

								});
								
						$("p#clickableTCA1").click(function(){
                        
                            $("div.TutoresCA1").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1CA1").click(function(){
                        
								$("div.tutor1CA1").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2CA1").click(function(){
                        
								$("div.tutor2CA1").slideToggle().delay("1000");

								});	
								
					
					$("p#clickable6").click(function(){
							
							$("div.Matematicas").slideToggle().delay("1000");

                        });
							
							$("p#clickableCM").click(function(){
                        
                            $("div.ClasesMate").slideToggle().delay("1000");

							});
							
							$("p#clickableMateBasic1").click(function(){
                        
								$("div.MateBasic1").slideToggle().delay("1000");

								});
						
						$("p#clickableVMB1").click(function(){
                        
                            $("div.VideosMateB1").slideToggle().delay("1000");

							});
							
							$("p#clickablelugar1MB1").click(function(){
                        
								$("div.lugar1MateB1").slideToggle().delay("1000");

								});
							
							$("p#clickablelugar2MB1").click(function(){
                        
								$("div.lugar2MateB1").slideToggle().delay("1000");

								});
								
						$("p#clickableLMB1").click(function(){
                        
                            $("div.LabsMateB1").slideToggle().delay("1000");

							});
							
							$("p#clickableLab1MB1").click(function(){
                        
								$("div.Lab1MateB1").slideToggle().delay("1000");

								});
							
							$("p#clickableLab2MB1").click(function(){
                        
								$("div.Lab2MateB1").slideToggle().delay("1000");

								});
								
						$("p#clickableTMB1").click(function(){
                        
                            $("div.TutoresMateB1").slideToggle().delay("1000");

							});
							
							$("p#clickabletutor1MB1").click(function(){
                        
								$("div.tutor1MateB1").slideToggle().delay("1000");

								});
							
							$("p#clickabletutor2MB1").click(function(){
                        
								$("div.tutor2MateB1").slideToggle().delay("1000");

								});	

                    $("td#sub").hover(function(){

                        $("div#su").fadeIn();

                        $("td#sub").css("color", "black");

                        },function(){

                        $("div#su").fadeOut();

                        $("td#sub").css("color", "black");

                    });        
    
            });

