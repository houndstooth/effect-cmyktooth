module CmyktoothTests.CmyktoothEffectTests exposing (cmyktoothEffectTests)

import Cmyktooth.CmyktoothEffect exposing (cmyktoothEffect)
import Expect
import Test exposing (Test, describe, test)


cmyktoothEffectTests : Test
cmyktoothEffectTests =
    describe "test effect test"
        [ test "tests whether i can have a test for an effect" <|
            \() ->
                let
                    expected =
                        "hey it's an effect"

                    actual =
                        cmyktoothEffect
                in
                Expect.equal expected actual
        ]
