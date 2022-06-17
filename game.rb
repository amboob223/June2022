# the purpose of this page is to make it functionalt then we will recreate it in js and then rails later
# we need a random generated number to scan through the keys in the hash and then that value of the hash
# to pop up in the screen
    hash = {"weed": "find a way to keep money to somke",
         "Women": "Start Dressing nice and smell well and KEEP money",
          "Traveling": "get a part time job for an airline with benefits",
        "Partying": "learn how to be a dj or stripper "}
rando = rand(0...hash.keys.length) # .keys and .values
mando = hash.keys # this is an array

     randomkey = mando[rando] # this was not defined in the hmethopd like the hash but was used to generate the rndom number on the outside

 
     p randomkey

def returner(hash,randomkey)
        hash.each do|key,val|
            if randomkey == key
                return val
            end
        end
    end
p returner(hash,randomkey)
