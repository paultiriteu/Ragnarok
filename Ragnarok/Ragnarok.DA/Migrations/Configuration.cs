namespace Ragnarok.DA.Migrations
{
    using Ragnarok.DA.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Ragnarok.DA.CathalogueDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Ragnarok.DA.CathalogueDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            // MOCK STUDENTS
            // MOCK STUDENTS
            // MOCK STUDENTS
            var tiriteu_paul = new Entities.Student
            {
                Id = new Guid("A22BC874-2564-4887-818E-23FD9AB2FCD7"),
                FirstName = "Paul",
                LastName = "Tiriteu",
                Class = "A",
                Year = 9
            };
            var purcar_andrei = new Entities.Student
            {
                Id = new Guid("C144D77C-BCAF-4FB8-8D5C-5BA1EAF370D4"),
                FirstName = "Andrei",
                LastName = "Purcar",
                Class = "A",
                Year = 9
            };
            var silaghi_timotei = new Entities.Student
            {
                Id = new Guid("0564A208-634F-487B-9885-12C75CEB8DAB"),
                FirstName = "Timotei",
                LastName = "Silaghi",
                Class = "A",
                Year = 9
            };
            var florescu_andreea = new Entities.Student
            {
                Id = new Guid("B9654470-E522-4B1A-A69E-718C5D45AAEA"),
                FirstName = "Andreea",
                LastName = "Florescu",
                Class = "A",
                Year = 9
            };

            var pop_florin = new Entities.Student
            {
                Id = new Guid("27E4DB5C-7D89-4275-92A5-184650A2EEC5"),
                FirstName = "Florin",
                LastName = "Pop",
                Class = "B",
                Year = 9
            };
            var sarca_andrei = new Entities.Student
            {
                Id = new Guid("890F0CD5-ED53-418B-A232-2121FBB1300D"),
                FirstName = "Andrei",
                LastName = "Sarca",
                Class = "B",
                Year = 9
            };
            var draghici_larisa = new Entities.Student
            {
                Id = new Guid("EC4D99EB-9335-493E-A38D-6954008F31AB"),
                FirstName = "Larisa",
                LastName = "Draghici",
                Class = "B",
                Year = 9
            };
            var matei_sebastian = new Entities.Student
            {
                Id = new Guid("D131F014-BE0B-46EB-9E02-E5D73EE796F3"),
                FirstName = "Sebastian",
                LastName = "Matei",
                Class = "B",
                Year = 9
            };

            var vlad_cosmin = new Entities.Student
            {
                Id = new Guid("BA5B7A72-BF5F-4EFD-B184-EEE2F86603DB"),
                FirstName = "Cosmin",
                LastName = "Vlad",
                Class = "A",
                Year = 10
            };
            var kis_robert = new Entities.Student
            {
                Id = new Guid("63CF0C56-26E9-4B37-A2FB-AABF9DD80F92"),
                FirstName = "Robert",
                LastName = "Kis",
                Class = "A",
                Year = 10
            };
            var anton_paul = new Entities.Student
            {
                Id = new Guid("5B614797-C607-4E26-BCB7-91AD981D762F"),
                FirstName = "Paul",
                LastName = "Anton",
                Class = "A",
                Year = 10
            };
            var malita_cristian = new Entities.Student
            {
                Id = new Guid("D7DFAEC6-4F47-4707-90DE-DF965D0619BD"),
                FirstName = "Cristian",
                LastName = "Malita",
                Class = "A",
                Year = 10
            };

            var stanciu_mircea = new Entities.Student
            {
                Id = new Guid("EF7FBEBF-6F04-422A-BB92-1D1C9D754817"),
                FirstName = "Mircea",
                LastName = "Stanciu",
                Class = "B",
                Year = 10
            };
            var popovici_alexandra = new Entities.Student
            {
                Id = new Guid("465E7E32-811F-4B23-AB9D-149356D22A05"),
                FirstName = "Alexandra",
                LastName = "Popovici",
                Class = "B",
                Year = 10
            };
            var stanescu_dragos = new Entities.Student
            {
                Id = new Guid("7E704712-B1A4-48E0-85C1-A9B0F27D1EA0"),
                FirstName = "Dragos",
                LastName = "Stanescu",
                Class = "B",
                Year = 10
            };
            var marica_andrei = new Entities.Student
            {
                Id = new Guid("15B67EED-A631-4EB2-AA0F-419DBC06E4F3"),
                FirstName = "Andrei",
                LastName = "Marica",
                Class = "B",
                Year = 10
            };

            var popa_david = new Entities.Student
            {
                Id = new Guid("EFE64E6B-CD83-45F2-8937-3154A7DE8571"),
                FirstName = "David",
                LastName = "Popa",
                Class = "A",
                Year = 11
            };
            var nan_sergiu = new Entities.Student
            {
                Id = new Guid("FB6007D6-F9E4-43B1-92DB-D5B1386336DC"),
                FirstName = "Sergiu",
                LastName = "Nan",
                Class = "A",
                Year = 11
            };
            var oncu_maria = new Entities.Student
            {
                Id = new Guid("4A0DFC07-3A9F-40F8-BBD8-1C54EC454940"),
                FirstName = "Maria",
                LastName = "Oncu",
                Class = "A",
                Year = 11
            };
            var florescu_raluca = new Entities.Student
            {
                Id = new Guid("94E4881A-B397-4BE2-84F9-E35D3934A568"),
                FirstName = "Raluca",
                LastName = "Florescu",
                Class = "A",
                Year = 11
            };

            var indries_vlad = new Entities.Student
            {
                Id = new Guid("11CF45BD-309B-4AA0-8C79-359D6B18735F"),
                FirstName = "Vlad",
                LastName = "Indries",
                Class = "B",
                Year = 11
            };
            var creanga_ion = new Entities.Student
            {
                Id = new Guid("DA2187F2-C09A-4F49-9B28-6AD5F92330B9"),
                FirstName = "Ion",
                LastName = "Creanga",
                Class = "B",
                Year = 11
            };
            var pintean_razvan = new Entities.Student
            {
                Id = new Guid("C293F88B-C79C-4DA5-A8B0-4226660F6108"),
                FirstName = "Razvan",
                LastName = "Pintean",
                Class = "B",
                Year = 11
            };
            var nicoara_bianca = new Entities.Student
            {
                Id = new Guid("CD9DD5A3-23B3-4D77-9A14-78D4B5D7FAA6"),
                FirstName = "Bianca",
                LastName = "Nicoara",
                Class = "B",
                Year = 11
            };

            var buzle_florin = new Entities.Student
            {
                Id = new Guid("7CF17B72-63D9-40DB-BCD2-E177495C108E"),
                FirstName = "Florin",
                LastName = "Buzle",
                Class = "A",
                Year = 12
            };
            var kovacs_raul = new Entities.Student
            {
                Id = new Guid("11D4EE5E-D641-465A-85E3-CF417844B95A"),
                FirstName = "Raul",
                LastName = "Kovacs",
                Class = "A",
                Year = 12
            };
            var meze_florina = new Entities.Student
            {
                Id = new Guid("EC4DCBF0-E5EE-42EA-BD33-0BD2DD43B5FA"),
                FirstName = "Florina",
                LastName = "Meze",
                Class = "A",
                Year = 12
            };
            var szabo_norbert = new Entities.Student
            {
                Id = new Guid("F6608782-E006-43F1-BDD6-A6C462AFE714"),
                FirstName = "Norbert",
                LastName = "Szabo",
                Class = "A",
                Year = 12
            };

            var pasca_ioan = new Entities.Student
            {
                Id = new Guid("C98C89D2-11A4-4919-BB24-47057E5E4DCB"),
                FirstName = "Ioan",
                LastName = "Pasca",
                Class = "B",
                Year = 12
            };
            var borsa_cristina = new Entities.Student
            {
                Id = new Guid("321E8B94-A9B7-46DD-8FBB-206E7AB391DD"),
                FirstName = "Cristina",
                LastName = "Borsa",
                Class = "B",
                Year = 12
            };
            var ionescu_pavel = new Entities.Student
            {
                Id = new Guid("F32B3675-7985-4237-B5BF-39C327433E08"),
                FirstName = "Pavel",
                LastName = "Ionescu",
                Class = "B",
                Year = 12
            };
            var muresan_alexandru = new Entities.Student
            {
                Id = new Guid("C90D07C4-D0F7-48B1-9DE3-156315C6029B"),
                FirstName = "Alexandru",
                LastName = "Muresan",
                Class = "B",
                Year = 12
            };


            //Subjects
            //Subjects
            //Subjects
            var matematica = new Entities.Subject
            {
                Id = new Guid("B5C135B4-D370-46D7-91E3-25A4B0B895FF"),
                Name = "Matematica",
                Professors = new List<Professor>()
            };
            var limba_romana = new Entities.Subject
            {
                Id = new Guid("75F6B126-D0EE-4D6F-A4CF-9121FE8E8FF3"),
                Name = "Limba romana",
                Professors = new List<Professor>()
            };
            var istorie = new Entities.Subject
            {
                Id = new Guid("FAFEB9E1-55DB-4D13-9D94-19D84DC6F75A"),
                Name = "Istorie",
                Professors = new List<Professor>()
            };
            var geografie = new Entities.Subject
            {
                Id = new Guid("A47B0AF1-DEBB-4919-A88A-2B20B4A2B62F"),
                Name = "Geografie",
                Professors = new List<Professor>()
            };
            var limba_engleza = new Entities.Subject
            {
                Id = new Guid("0DD9A0B9-5FF7-4BB9-B56B-FA3FCBBD7B8E"),
                Name = "Limba engleza",
                Professors = new List<Professor>()
            };
            var limba_franceza = new Entities.Subject
            {
                Id = new Guid("2ECD2D11-BBB5-4E6E-BD8E-5B4DCFD1F6D5"),
                Name = "Limba franceza",
                Professors = new List<Professor>()
            };
            var contabilitate = new Entities.Subject
            {
                Id = new Guid("E6FF8575-EE0B-42EF-B72B-A555F4993C5D"),
                Name = "Contabilitate",
                Professors = new List<Professor>()
            };
            var oru = new Entities.Subject
            {
                Id = new Guid("D3285B59-3F5A-466A-B240-6909E34AEE1B"),
                Name = "Organizarea resurselor umane",
                Professors = new List<Professor>()
            };
            var tic = new Entities.Subject
            {
                Id = new Guid("71C91295-2A6A-4AE1-A519-19BB0D3F2FFF"),
                Name = "TIC",
                Professors = new List<Professor>()
            };
            var pue = new Entities.Subject
            {
                Id = new Guid("5C1EE75E-148F-4B13-8449-7A4D4CA544B1"),
                Name = "Patrimoniul unitatii economice",
                Professors = new List<Professor>()
            };
            var sport = new Entities.Subject
            {
                Id = new Guid("0D0E8875-BD64-4FBE-9B87-7C61D8698C03"),
                Name = "Sport",
                Professors = new List<Professor>()
            };

            //Professors
            //Professors
            //Professors
            var ion_popescu = new Entities.Professor
            {
                Id = new Guid("CE46174A-1D67-4E7E-9622-EF05BD99052D"),
                FirstName = "Ion",
                LastName = "Popescu",
                Subjects = new List<Subject>()
            };
            var florin_filip = new Entities.Professor
            {
                Id = new Guid("CB181041-E846-44EF-BA87-A28F3675894A"),
                FirstName = "Florin",
                LastName = "Filip",
                Subjects = new List<Subject>()
            };
            var mircea_radu = new Entities.Professor
            {
                Id = new Guid("75E5BB0B-7367-4960-84D0-B5BC7031B950"),
                FirstName = "Mircea",
                LastName = "Radu",
                Subjects = new List<Subject>()
            };
            var ovidiu_antonescu = new Entities.Professor
            {
                Id = new Guid("41109822-4B99-4336-9B65-1C7770039550"),
                FirstName = "Ovidiu",
                LastName = "Antonescu",
                Subjects = new List<Subject>()
            };
            var maria_popa = new Entities.Professor
            {
                Id = new Guid("B7B1D1EA-84D2-42F2-8A08-0A2FFB86FCD4"),
                FirstName = "Maria",
                LastName = "Popa",
                Subjects = new List<Subject>()
            };
            var delia_costea = new Entities.Professor
            {
                Id = new Guid("A05A37E2-E22B-4148-8B1F-B0505EB1B041"),
                FirstName = "Delia",
                LastName = "Costea",
                Subjects = new List<Subject>()
            };
            var mihaela_florea = new Entities.Professor
            {
                Id = new Guid("8635FFE6-D7EE-4C5F-8666-7870C277BC2D"),
                FirstName = "Mihaela",
                LastName = "Florea",
                Subjects = new List<Subject>()
            };

            matematica.Professors.Add(ion_popescu);
            matematica.Professors.Add(florin_filip);
            limba_romana.Professors.Add(mircea_radu);
            limba_romana.Professors.Add(ovidiu_antonescu);
            limba_engleza.Professors.Add(mircea_radu);
            limba_engleza.Professors.Add(ovidiu_antonescu);
            limba_franceza.Professors.Add(mircea_radu);
            limba_franceza.Professors.Add(ovidiu_antonescu);
            istorie.Professors.Add(maria_popa);
            geografie.Professors.Add(maria_popa);
            contabilitate.Professors.Add(delia_costea);
            oru.Professors.Add(delia_costea);
            pue.Professors.Add(delia_costea);
            tic.Professors.Add(mihaela_florea);
            sport.Professors.Add(mihaela_florea);

            context.Subjects.AddOrUpdate(s => s.Id,
                matematica,
                limba_romana,
                limba_engleza,
                limba_franceza,
                istorie,
                geografie,
                contabilitate,
                oru,
                pue,
                tic,
                sport
                );

            context.Professors.AddOrUpdate(p => p.Id,
                ion_popescu,
                florin_filip,
                mircea_radu,
                ovidiu_antonescu,
                maria_popa,
                delia_costea,
                mihaela_florea
                );



            context.Students.AddOrUpdate(s => s.Id,
                //clasa a 9-a
                tiriteu_paul,
                purcar_andrei,
                silaghi_timotei,
                florescu_andreea,
                pop_florin,
                sarca_andrei,
                draghici_larisa,
                matei_sebastian,
                //clasa a 10-a
                vlad_cosmin,
                kis_robert,
                anton_paul,
                malita_cristian,
                stanciu_mircea,
                popovici_alexandra,
                stanescu_dragos,
                marica_andrei,
                //clasa a 11-a
                popa_david,
                nan_sergiu,
                oncu_maria,
                florescu_raluca,
                indries_vlad,
                creanga_ion,
                pintean_razvan,
                nicoara_bianca,
                //clasa a 12-a
                buzle_florin,
                kovacs_raul,
                meze_florina,
                szabo_norbert,
                pasca_ioan,
                borsa_cristina,
                ionescu_pavel,
                muresan_alexandru
                );

            context.SaveChanges();

        }
    }
}
